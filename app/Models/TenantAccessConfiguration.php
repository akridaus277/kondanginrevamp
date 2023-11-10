<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantAccessConfiguration extends Model
{
    use HasFactory;
    public function tenantFeaturePermission()
    {
        return $this->belongsTo(TenantFeaturePermission::class,'tenant_feature_permission_id','id');
    }
    public function tenantRole()
    {
        return $this->belongsTo(TenantRole::class,'tenant_role_id','id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function tenant()
    {
        return $this->belongsTo(Tenant::class,'tenant_id','id');
    }
    public function setTenantFeaturePermission($tenantFeaturePermission)
    {
        $this->tenantFeaturePermission()->associate($tenantFeaturePermission);
        // $this->save();
    }
    public function setTenantRole($tenantRole)
    {
        $this->tenantRole()->associate($tenantRole);
        // $this->save();
    }
    public function setUser($user)
    {
        $this->user()->associate($user);
        // $this->save();
    }
    public function setTenant($tenant)
    {
        $this->tenant()->associate($tenant);
        // $this->save();
    }

    public static function getRolesNameByUserAndTenant($user, $tenant)
    {
        $roles = collect();
        $roleResults = TenantAccessConfiguration::distinct()
        ->where('user_id',$user->id)
        ->where('tenant_id',$tenant->id)
        ->get(['tenant_role_id']);
        foreach ($roleResults as $roleResult) {
            $role = TenantRole::where('id',$roleResult->tenant_role_id)->first()->name;
            $roles->add($role);
        }
        return $roles;
    }

    public static function getFeaturesNameByUserAndTenant($user, $tenant)
    {
        $features = collect();
        $tenantFeaturePermissionResults = TenantAccessConfiguration::distinct()
        ->where('user_id',$user->id)
        ->where('tenant_id',$tenant->id)
        ->get(['tenant_feature_permission_id']);
        foreach ($tenantFeaturePermissionResults as $tenantFeaturePermissionResult) {
            $tenantFeaturePermission = TenantFeaturePermission::where('id',$tenantFeaturePermissionResult->tenant_feature_permission_id)->first();
            $feature = $tenantFeaturePermission->tenantFeature->name;
            $features->add($feature);
        }
        return $features->unique()->values()->all();
    }

    public static function getFeaturesAndPermissionsNameByUserAndTenant($user, $tenant)
    {
        $featurePermissions = collect();
        $features = collect();
        $tenantFeaturePermissionResults = TenantAccessConfiguration::distinct()
        ->where('user_id',$user->id)
        ->where('tenant_id',$tenant->id)
        ->get(['tenant_feature_permission_id']);
        foreach ($tenantFeaturePermissionResults as $tenantFeaturePermissionResult) {
            $tenantFeaturePermission = TenantFeaturePermission::where('id',$tenantFeaturePermissionResult->tenant_feature_permission_id)->first();
            $feature = $tenantFeaturePermission->tenantFeature->name;
            $permission = $tenantFeaturePermission->tenantPermission->name;
            $features->add($feature);
            $featurePermissions->add($feature.':'.$permission);
        }
        return $featurePermissions;
    }
}
