<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantType;

class TenantTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TenantType::create(['name' => 'Wedding']);
        TenantType::create(['name' => 'Company Event']);
        TenantType::create(['name' => 'Birthday']);
        TenantType::create(['name' => 'Circumcision']);
        TenantType::create(['name' => 'Organization Event']);

        //
    }
}
