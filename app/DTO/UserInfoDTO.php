<?php

namespace App\DTO;

class UserInfoDTO
{

    public $name;
    public $email;
    public $companyName;
    public $roles;
    public $permissions;
    // Tambahkan properti lain sesuai kebutuhan

    public function __construct($user)
    {
        $this->name = $user->name;
        $this->email = $user->email;
        $companyName = $user->companies()->first()? $user->companies()->first()->company_name : null;
        $roles = [];
        $permissions = collect();


        foreach ($user->roles as $role) {
            array_push($roles, $role->name);
            foreach ($role->permissions as $permission) {
                $permissions->add($permission->name);
            }


        }
        $this->companyName = $companyName;
        $this->roles = $roles;
        $this->permissions = $permissions;
        // Isi properti lain sesuai kebutuhan
    }
}
