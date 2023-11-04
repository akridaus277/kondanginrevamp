<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;


class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);
        Role::create(['name' => 'tenant_company']);

        // In your RolesTableSeeder
        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();
        $tenantCompanyRole = Role::where('name', 'tenant_company')->first();

        $viewPostPermission = Permission::where('name', 'view post')->first();
        $createPostPermission = Permission::where('name', 'create post')->first();
        $editPostPermission = Permission::where('name', 'edit post')->first();
        $deletePostPermission = Permission::where('name', 'delete post')->first();


        $adminRole->givePermissionTo([$createPostPermission, $editPostPermission, $deletePostPermission, $viewPostPermission]);
        $userRole->givePermissionTo([$viewPostPermission]);
        $tenantCompanyRole->givePermissionTo([$createPostPermission, $editPostPermission, $deletePostPermission, $viewPostPermission]);



        //
    }
}
