<?php

namespace App\DTO;

use App\Models\TenantAccessConfiguration;
use App\Models\TenantFeaturePermission;
use App\Models\TenantRole;
use Illuminate\Support\Facades\DB;

class TenantUserInfoDTO
{

    public $name;
    public $email;
    public $companyName;
    public $tenant;
    public $role;
    public $features;
    public $featurePermissions;
    // Tambahkan properti lain sesuai kebutuhan

    public function __construct($tenant, $user)
    {
        $this->name = $user->name;
        $this->email = $user->email;
        $companyName = $user->companies()->first()? $user->companies()->first()->company_name : null;

        $role = TenantAccessConfiguration::getRolesNameByUserAndTenant($user, $tenant);
        $featurePermissions = TenantAccessConfiguration::getFeaturesAndPermissionsNameByUserAndTenant($user, $tenant);
        $features = TenantAccessConfiguration::getFeaturesNameByUserAndTenant($user, $tenant);

        $this->companyName = $companyName;
        $this->tenant = $tenant->id;
        $this->role = $role;
        $this->features = $features;
        $this->featurePermissions = $featurePermissions;

    }
}
