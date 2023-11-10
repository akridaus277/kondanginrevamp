<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenant;

class TenantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tenant1 = Tenant::create(['id' => 'outingdisco']);
        $tenant1->domains()->create(['domain' => 'outingdisco']);
        $tenant2 = Tenant::create(['id' => 'tirtaamanda']);
        $tenant2->domains()->create(['domain' => 'tirtaamanda']);
        //
    }
}
