<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantPackage;
use App\Models\TenantType;

class TenantPackageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (TenantType::all() as $tenantType) {


            $tenantPackageBronze = TenantPackage::create(
                [
                    'name' => $tenantType->name.' '.'Bronze',
                    'price' => 99000,
                    'tenant_type_id' => $tenantType->id,
                ]
            );
            $tenantPackageSilver = TenantPackage::create(
                [
                    'name' => $tenantType->name.' '.'Silver',
                    'price' => 125000,
                    'tenant_type_id' => $tenantType->id,
                ]
            );
            $tenantPackageGold = TenantPackage::create(
                [
                    'name' => $tenantType->name.' '.'Gold',
                    'price' => 199000,
                    'tenant_type_id' => $tenantType->id,
                ]
            );
            $tenantPackageAmethyst = TenantPackage::create(
                [
                    'name' => $tenantType->name.' '.'Amethyst',
                    'price' => 220000,
                    'tenant_type_id' => $tenantType->id,
                ]
            );


        }
        //
    }
}
