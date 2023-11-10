<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantPermission;

class TenantPermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TenantPermission::create(['name' => 'create']);
        TenantPermission::create(['name' => 'read']);
        TenantPermission::create(['name' => 'update']);
        TenantPermission::create(['name' => 'delete']);


        //
    }
}
