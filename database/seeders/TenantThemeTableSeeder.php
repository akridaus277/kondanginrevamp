<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantTheme;
use App\Models\TenantPackage;

class TenantThemeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tenantTypeNames = ['Wedding', 'Company Event', 'Birthday', 'Circumcision', 'Organization Event'];
        $tenantPackageNames = ['Bronze', 'Silver', 'Gold', 'Amethyst'];

        foreach ($tenantTypeNames as $tenantTypeName) {
            foreach ($tenantPackageNames as $tenantPackageName) {
                $tenantPackage = TenantPackage::where('name', $tenantTypeName.' '.$tenantPackageName)->first();

                // tema 1
                TenantTheme::create([
                    'name' => $tenantTypeName.' '.$tenantPackageName.' '.'1',
                    'cover' => 'https://kondangin.org/assets/img/amet/AmetDua.jpeg',
                    'tenant_package_id' => $tenantPackage->id
                ]);
                // tema 2
                TenantTheme::create([
                    'name' => $tenantTypeName.' '.$tenantPackageName.' '.'2',
                    'cover' => 'https://kondangin.org/assets/img/amet/AmetDua.jpeg',
                    'tenant_package_id' => $tenantPackage->id
                ]);
                // tema 3
                TenantTheme::create([
                    'name' => $tenantTypeName.' '.$tenantPackageName.' '.'3',
                    'cover' => 'https://kondangin.org/assets/img/amet/AmetDua.jpeg',
                    'tenant_package_id' => $tenantPackage->id
                ]);
            }
        }
        //
    }
}
