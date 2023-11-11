<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantPackageFeatureConstraint extends Model
{
    use HasFactory;
    protected $fillable = [
        'max_entity'
    ];

    public function tenantPackage()
    {
        return $this->belongsTo(TenantPackage::class,'tenant_package_id','id');
    }
    public function tenantFeature()
    {
        return $this->belongsTo(TenantFeature::class,'tenant_feature_id','id');
    }
    public function setTenantPackage($tenantPackage)
    {
        $this->tenantPackage()->associate($tenantPackage);
    }
    public function setTenantFeature($tenantFeature)
    {
        $this->tenantFeature()->associate($tenantFeature);
    }

    public static function getFeaturesAndConstraintsByTenantPackage($tenantPackage)
    {
        $featureConstraints = collect();
        $tenantPackageFeatureConstraintResults = TenantPackageFeatureConstraint::where('tenant_package_id',$tenantPackage->id)->get();
        echo($tenantPackage->id);
        foreach ($tenantPackageFeatureConstraintResults as $tenantPackageFeatureConstraintResult) {
            $feature = TenantFeature::where('id',$tenantPackageFeatureConstraintResult->tenant_feature_id)->first();
            $constraint = $tenantPackageFeatureConstraintResult->max_entity;
            $featureConstraints->add($feature->name.':'.$constraint);
        }
        return $featureConstraints;
    }
}
