<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenant;
use App\Models\TenantType;
use App\Models\TenantPackage;
use App\Models\TenantTheme;

class TenantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tenantTypeWedding = TenantType::where('name', 'Wedding')->first();
        $tenantTypeCompanyEvent = TenantType::where('name', 'Company Event')->first();
        $tenantPackageWeddingAmethyst = TenantPackage::where('name', $tenantTypeWedding->name.' '.'Amethyst')->first();
        $tenantPackageCompanyEventAmethyst = TenantPackage::where('name', $tenantTypeCompanyEvent->name.' '.'Amethyst')->first();
        $tenantThemeWeddingAmethyst1 = TenantTheme::where('name', $tenantPackageWeddingAmethyst->name.' '.'1')->first();
        $tenantThemeCompanyEventAmethyst1 = TenantTheme::where('name', $tenantPackageCompanyEventAmethyst->name.' '.'1')->first();

        $tenant1 = Tenant::create([
            'id' => 'outingdisco',
            'active' => true,
            'tenant_type_id' => $tenantTypeCompanyEvent->id,
            'tenant_package_id' => $tenantPackageCompanyEventAmethyst->id,
            'tenant_theme_id' => $tenantThemeCompanyEventAmethyst1->id
        ]);
        $tenant1->domains()->create(['domain' => 'outingdisco']);
        $tenant2 = Tenant::create([
            'id' => 'tirtaamanda',
            'active' => true,
            'tenant_type_id' => $tenantTypeWedding->id,
            'tenant_package_id' => $tenantPackageWeddingAmethyst->id,
            'tenant_theme_id' => $tenantThemeWeddingAmethyst1->id
        ]);
        $tenant2->domains()->create(['domain' => 'tirtaamanda']);
        //
    }
}
