<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantFeatureMapping extends Model
{
    use HasFactory;
    public function tenant()
    {
        return $this->belongsTo(Tenant::class,'tenant_id','id');
    }
    public function tenantFeature()
    {
        return $this->belongsTo(TenantFeature::class,'tenant_feautre_id','id');
    }
    public function setTenant($tenant)
    {
        $this->tenant()->associate($tenant);
    }
    public function setTenantFeature($tenantFeature)
    {
        $this->tenantFeature()->associate($tenantFeature);
    }
    public static function getFeaturesNameByTenant($tenant)
    {
        $features = collect();
        $tenantFeatureMappingResults = TenantFeatureMapping::distinct()
        ->where('tenant_id',$tenant->id)
        ->get(['tenant_feature_id']);
        foreach ($tenantFeatureMappingResults as $tenantFeatureMappingResult) {
            $tenantFeature = TenantFeature::where('id',$tenantFeatureMappingResult->tenant_feature_id)->first();
            $features->add($tenantFeature->name);
        }
        return $features->unique()->values()->all();
    }
}
