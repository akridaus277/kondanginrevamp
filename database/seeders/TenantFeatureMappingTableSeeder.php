<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenant;
use App\Models\TenantFeature;
use App\Models\TenantFeatureMapping;

class TenantFeatureMappingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tenants = Tenant::all();
        $tenantFeatures = TenantFeature::all();

        foreach ($tenants as $tenant) {
            foreach ($tenantFeatures as $tenantFeature) {
                TenantFeatureMapping::create([
                    'tenant_id' => $tenant->id,
                    'tenant_feature_id' => $tenantFeature->id
                ]);
            }
        }
        //
    }
}
