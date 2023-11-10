<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DomainPermission;

class DomainPermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DomainPermission::create(['name' => 'create']);
        DomainPermission::create(['name' => 'read']);
        DomainPermission::create(['name' => 'update']);
        DomainPermission::create(['name' => 'delete']);

        $createPermission = DomainPermission::where('name', 'create')->first();
        $readPermission = DomainPermission::where('name', 'read')->first();
        $updatePermission = DomainPermission::where('name', 'update')->first();
        $deletePermission = DomainPermission::where('name', 'delete')->first();
        //
    }
}
