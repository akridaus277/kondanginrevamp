<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantRole;

class TenantRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TenantRole::create(['name' => 'owner']);
        TenantRole::create(['name' => 'collaborator']);
        //
    }
}
