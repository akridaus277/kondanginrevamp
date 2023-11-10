<?php

namespace App\DTO;

use App\Models\DomainAccessConfiguration;
use App\Models\DomainFeaturePermission;
use App\Models\DomainRole;
use Illuminate\Support\Facades\DB;

class UserInfoDTO
{

    public $name;
    public $email;
    public $companyName;
    public $roles;
    public $features;
    public $featurePermissions;
    // Tambahkan properti lain sesuai kebutuhan

    public function __construct($user)
    {
        $this->name = $user->name;
        $this->email = $user->email;
        $companyName = $user->companies()->first()? $user->companies()->first()->company_name : null;

        $roles = DomainAccessConfiguration::getRolesNameByUser($user);
        $featurePermissions = DomainAccessConfiguration::getFeaturesAndPermissionsNameByUser($user);
        $features = DomainAccessConfiguration::getFeaturesNameByUser($user);

        $this->companyName = $companyName;
        $this->roles = $roles;
        $this->features = $features;
        $this->featurePermissions = $featurePermissions;

    }
}
