<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantFeaturePermission extends Model
{
    use HasFactory;

    public function tenantFeature()
    {
        return $this->belongsTo(TenantFeature::class,'tenant_feature_id','id');
    }
    public function tenantPermission()
    {
        return $this->belongsTo(TenantPermission::class,'tenant_permission_id','id');
    }
    public function setTenantFeature($tenantFeature)
    {
        $this->tenantFeature()->associate($tenantFeature);
        // $this->save();
    }
    public function setTenantPermission($tenantPermission)
    {
        $this->tenantPermission()->associate($tenantPermission);
        // $this->save();
    }
}
