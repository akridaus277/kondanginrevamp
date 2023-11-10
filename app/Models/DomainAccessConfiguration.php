<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DomainAccessConfiguration extends Model
{
    use HasFactory;
    public function domainFeaturePermission()
    {
        return $this->belongsTo(DomainFeaturePermission::class,'domain_feature_permission_id','id');
    }
    public function domainRole()
    {
        return $this->belongsTo(DomainRole::class,'domain_role_id','id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function setDomainFeaturePermission($domainFeaturePermission)
    {
        $this->domainFeaturePermission()->associate($domainFeaturePermission);
        // $this->save();
    }
    public function setDomainRole($domainRole)
    {
        $this->domainRole()->associate($domainRole);
        // $this->save();
    }
    public function setUser($user)
    {
        $this->user()->associate($user);
        // $this->save();
    }

    public static function getRolesNameByUser($user)
    {
        $roles = collect();
        $roleResults = DomainAccessConfiguration::distinct()->where('user_id',$user->id)->get(['domain_role_id']);
        foreach ($roleResults as $roleResult) {
            $role = DomainRole::where('id',$roleResult->domain_role_id)->first()->name;
            $roles->add($role);
        }
        return $roles;
    }

    public static function getFeaturesNameByUser($user)
    {
        $features = collect();
        $domainFeaturePermissionResults = DomainAccessConfiguration::distinct()->where('user_id',$user->id)->get(['domain_feature_permission_id']);
        foreach ($domainFeaturePermissionResults as $domainFeaturePermissionResult) {
            $domainFeaturePermission = DomainFeaturePermission::where('id',$domainFeaturePermissionResult->domain_feature_permission_id)->first();
            $feature = $domainFeaturePermission->domainFeature->name;
            $features->add($feature);
        }
        return $features->unique()->values()->all();
    }

    public static function getFeaturesAndPermissionsNameByUser($user)
    {
        $featurePermissions = collect();
        $features = collect();
        $domainFeaturePermissionResults = DomainAccessConfiguration::distinct()->where('user_id',$user->id)->get(['domain_feature_permission_id']);
        foreach ($domainFeaturePermissionResults as $domainFeaturePermissionResult) {
            $domainFeaturePermission = DomainFeaturePermission::where('id',$domainFeaturePermissionResult->domain_feature_permission_id)->first();
            $feature = $domainFeaturePermission->domainFeature->name;
            $permission = $domainFeaturePermission->domainPermission->name;
            $features->add($feature);
            $featurePermissions->add($feature.':'.$permission);
        }
        return $featurePermissions;
    }


}
