<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;
    public static function getCustomColumns(): array
    {
        return [
            'id',
            'active',
            'tenant_type_id',
            'tenant_package_id',
            'tenant_theme_id',
        ];
    }

    protected $fillable = [
        'active'
    ];

    public function tenantType(): BelongsTo
    {
        return $this->belongsTo(TenantType::class);
    }
    public function tenantPackage(): BelongsTo
    {
        return $this->belongsTo(TenantPackage::class);
    }
    public function tenantTheme(): BelongsTo
    {
        return $this->belongsTo(TenantTheme::class);
    }
    public function tenantFeatures()
    {
        $tenantFeatures = collect();
        $tenantFeatureMappings = TenantFeatureMapping::where('tenant_id',$this->id)->get();
        foreach ($tenantFeatureMappings as $tenantFeatureMapping) {
            $tenantFeature = TenantFeature::where('id', $tenantFeatureMapping->tenant_feature_id);
            $tenantFeatures->add($tenantFeature);
        }
        return $tenantFeatures;
    }
    public function setTenantType($tenantType)
    {
        $this->tenantType()->save($tenantType);
    }
    public function setTenantPackage($tenantPackage)
    {
        $this->tenantPackage()->save($tenantPackage);
    }
    public function setTenantTheme($tenantTheme)
    {
        $this->tenantTheme()->save($tenantTheme);
    }

}
