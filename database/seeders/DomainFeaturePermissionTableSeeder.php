<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DomainFeature;
use App\Models\DomainPermission;
use App\Models\DomainFeaturePermission;

class DomainFeaturePermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        foreach (DomainFeature::all() as $domainFeature) {

            $domainPermissions = DomainPermission::all();

            foreach ($domainPermissions as $domainPermission) {
                $domainFeaturePermission = DomainFeaturePermission::create(
                    [
                        'domain_feature_id' => $domainFeature->id,
                        'domain_permission_id' => $domainPermission->id,
                    ]
                );
            }

        }

        //
    }
}
