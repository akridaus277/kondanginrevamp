<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantFeature;
use App\Models\TenantPermission;
use App\Models\TenantFeaturePermission;

class TenantFeaturePermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (TenantFeature::all() as $tenantFeature) {

            $tenantPermissions = TenantPermission::all();

            foreach ($tenantPermissions as $tenantPermission) {
                $tenantFeaturePermission = TenantFeaturePermission::create(
                    [
                        'tenant_feature_id' => $tenantFeature->id,
                        'tenant_permission_id' => $tenantPermission->id,
                    ]
                );
            }

        }
        //
    }
}
