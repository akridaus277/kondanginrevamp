<?php

namespace App\DTO;

use App\Models\TenantAccessConfiguration;
use App\Models\TenantFeaturePermission;
use App\Models\TenantFeatureMapping;
use App\Models\TenantRole;
use Illuminate\Support\Facades\DB;
use App\Models\TenantPackageFeatureConstraint;

class TenantUserInfoDTO
{

    public $name;
    public $email;
    public $companyName;
    public $tenant;
    public $tenantType;
    public $package;
    public $theme;
    public $role;
    public $features;
    public $featurePermissions;
    public $featureConstraints;
    // Tambahkan properti lain sesuai kebutuhan

    public function __construct($tenant, $user)
    {
        $this->name = $user->name;
        $this->email = $user->email;
        $companyName = $user->companies()->first()? $user->companies()->first()->company_name : null;

        $role = TenantAccessConfiguration::getRolesNameByUserAndTenant($user, $tenant);
        $featurePermissions = TenantAccessConfiguration::getFeaturesAndPermissionsNameByUserAndTenant($user, $tenant);
        $features = TenantFeatureMapping::getFeaturesNameByTenant($tenant);
        $featureConstraints = TenantPackageFeatureConstraint::getFeaturesAndConstraintsByTenantPackage($tenant->tenantPackage);

        $this->companyName = $companyName;
        $this->tenant = $tenant->id;
        $this->role = $role;
        $this->features = $features;
        $this->tenantType = $tenant->tenantType->name;
        $this->package = $tenant->tenantPackage->name;
        $this->theme = $tenant->tenantTheme->name;
        $this->featurePermissions = $featurePermissions;
        $this->featureConstraints = $featureConstraints;

    }
}
