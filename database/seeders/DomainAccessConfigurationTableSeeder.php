<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\DomainFeature;
use App\Models\DomainRole;
use App\Models\DomainFeaturePermission;
use App\Models\DomainAccessConfiguration;
use Illuminate\Support\Facades\DB;

class DomainAccessConfigurationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $adminRole = DomainRole::where('name', 'admin')->first();
        $eventOrganizerRole = DomainRole::where('name', 'event_organizer')->first();
        $resellerRole = DomainRole::where('name', 'reseller')->first();
        $retailerRole = DomainRole::where('name', 'retailer')->first();

        $akri = User::where('name', 'Akri')->first();
        $dhimas = User::where('name', 'Dhimas')->first();
        $nanda = User::where('name', 'Nanda')->first();
        $hawa = User::where('name', 'Hawa Undangan')->first();
        $tirta = User::where('name', 'Dr. Tirta')->first();
        $faishal = User::where('name', 'Faishal')->first();


        $adminFeatures = ['admin_invitation','admin_whatsapp_blast','admin_dashboard','admin_guest_export'];
        $eventOrganizerFeatures = ['user_shopping'];
        $resellerFeatures = ['user_shopping'];
        $retailerFeatures = ['user_shopping'];

        $adminFeatureIds = collect();
        $eventOrganizerFeatureIds = collect();
        $resellerFeatureIds = collect();
        $retailerFeatureIds = collect();
        foreach ($adminFeatures as $featureName) {
            $featureId = DomainFeature::where('name',$featureName)->first()->id;
            $adminFeatureIds->add($featureId);
        }
        foreach ($eventOrganizerFeatures as $featureName) {
            $featureId = DomainFeature::where('name',$featureName)->first()->id;
            $eventOrganizerFeatureIds->add($featureId);
        }
        foreach ($resellerFeatures as $featureName) {
            $featureId = DomainFeature::where('name',$featureName)->first()->id;
            $resellerFeatureIds->add($featureId);
        }
        foreach ($retailerFeatures as $featureName) {
            $featureId = DomainFeature::where('name',$featureName)->first()->id;
            $retailerFeatureIds->add($featureId);
        }

        $adminDomainFeaturePermissions = DB::table('domain_feature_permissions')->whereIn('domain_feature_id',$adminFeatureIds)->get();
        $eventOrganizerDomainFeaturePermissions = DB::table('domain_feature_permissions')->whereIn('domain_feature_id',$eventOrganizerFeatureIds)->get();
        $resellerDomainFeaturePermissions = DB::table('domain_feature_permissions')->whereIn('domain_feature_id',$resellerFeatureIds)->get();
        $retailerDomainFeaturePermissions = DB::table('domain_feature_permissions')->whereIn('domain_feature_id',$retailerFeatureIds)->get();

        //assign to user Akri
        foreach ($adminDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $akri->id,
                'domain_role_id' => $adminRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }
        //assign to user Dhimas
        foreach ($adminDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $dhimas->id,
                'domain_role_id' => $adminRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }
        //assign to user Hawa
        foreach ($eventOrganizerDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $hawa->id,
                'domain_role_id' => $eventOrganizerRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }
        //assign to user Nanda
        foreach ($resellerDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $nanda->id,
                'domain_role_id' => $resellerRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }
        //assign to user Tirta
        foreach ($retailerDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $tirta->id,
                'domain_role_id' => $retailerRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }
        //assign to user Faishal
        foreach ($retailerDomainFeaturePermissions as $domainFeaturePermission) {
            DomainAccessConfiguration::create([
                'user_id' => $faishal->id,
                'domain_role_id' => $retailerRole->id,
                'domain_feature_permission_id' => $domainFeaturePermission->id
            ]);
        }







        //
    }
}
