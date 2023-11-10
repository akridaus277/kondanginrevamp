<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tenant;
use App\Models\TenantFeature;
use App\Models\TenantRole;
use App\Models\TenantFeaturePermission;
use App\Models\TenantAccessConfiguration;
use App\Models\TenantPermission;
use Illuminate\Support\Facades\DB;

class TenantAccessConfigurationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ownerRole = TenantRole::where('name', 'owner')->first();
        $collaboratorRole = TenantRole::where('name', 'collaborator')->first();

        $akri = User::where('name', 'Akri')->first();
        $dhimas = User::where('name', 'Dhimas')->first();
        $nanda = User::where('name', 'Nanda')->first();
        $hawa = User::where('name', 'Hawa Undangan')->first();
        $tirta = User::where('name', 'Dr. Tirta')->first();
        $faishal = User::where('name', 'Faishal')->first();

        $outingdisco = Tenant::where('id', 'outingdisco')->first();
        $tirtaamanda = Tenant::where('id', 'tirtaamanda')->first();

        $eventOrganizerFeatures = ['gift_address','photo_gallery','background_photo','music','bride_groom','quote','money_gift','agenda','guest','greeting','video','tema','qr_code'];
        $retailerFeatures = ['gift_address','photo_gallery','background_photo','music','bride_groom','quote','money_gift','agenda','guest','greeting','video','tema'];
        $eventOrganizerFeatureIds = collect();
        $retailerFeatureIds = collect();
        foreach ($eventOrganizerFeatures as $featureName) {
            $featureId = TenantFeature::where('name',$featureName)->first()->id;
            $eventOrganizerFeatureIds->add($featureId);
        }
        foreach ($retailerFeatures as $featureName) {
            $featureId = TenantFeature::where('name',$featureName)->first()->id;
            $retailerFeatureIds->add($featureId);
        }

        $ownerPermissions = ['create','read','update','delete'];
        $collaboratorPermissions = ['update'];
        $ownerPermissionIds = collect();
        $collaboratorPermissionIds = collect();
        foreach ($ownerPermissions as $permissionName) {
            $permissionId = TenantPermission::where('name',$permissionName)->first()->id;
            $ownerPermissionIds->add($permissionId);
        }
        foreach ($collaboratorPermissions as $permissionName) {
            $permissionId = TenantPermission::where('name',$permissionName)->first()->id;
            $collaboratorPermissionIds->add($permissionId);
        }

        $eventOrganizer_ownerTenantFeaturePermissions = DB::table('tenant_feature_permissions')
        ->whereIn('tenant_feature_id',$eventOrganizerFeatureIds)
        ->whereIn('tenant_permission_id',$ownerPermissionIds)
        ->get();
        $retailer_ownerTenantFeaturePermissions = DB::table('tenant_feature_permissions')
        ->whereIn('tenant_feature_id',$retailerFeatureIds)
        ->whereIn('tenant_permission_id',$ownerPermissionIds)
        ->get();
        $retailer_collaboratorTenantFeaturePermissions = DB::table('tenant_feature_permissions')
        ->whereIn('tenant_feature_id',$retailerFeatureIds)
        ->whereIn('tenant_permission_id',$collaboratorPermissionIds)
        ->get();

        //assign hawa to tenant tirtaamanda as owner
        foreach ($eventOrganizer_ownerTenantFeaturePermissions as $eventOrganizer_ownerTenantFeaturePermission) {
            TenantAccessConfiguration::create([
                'tenant_id' => $tirtaamanda->id,
                'user_id' => $hawa->id,
                'tenant_role_id' => $ownerRole->id,
                'tenant_feature_permission_id' => $eventOrganizer_ownerTenantFeaturePermission->id
            ]);
        }
        //assign tirta to tenant tirtaamanda as collaborator
        foreach ($retailer_collaboratorTenantFeaturePermissions as $retailer_collaboratorTenantFeaturePermission) {
            TenantAccessConfiguration::create([
                'tenant_id' => $tirtaamanda->id,
                'user_id' => $tirta->id,
                'tenant_role_id' => $collaboratorRole->id,
                'tenant_feature_permission_id' => $retailer_collaboratorTenantFeaturePermission->id
            ]);
        }
        //assign faishal to tenant outingdisco as owner
        foreach ($retailer_ownerTenantFeaturePermissions as $retailer_ownerTenantFeaturePermission) {
            TenantAccessConfiguration::create([
                'tenant_id' => $outingdisco->id,
                'user_id' => $faishal->id,
                'tenant_role_id' => $ownerRole->id,
                'tenant_feature_permission_id' => $retailer_ownerTenantFeaturePermission->id
            ]);
        }
    }
}
