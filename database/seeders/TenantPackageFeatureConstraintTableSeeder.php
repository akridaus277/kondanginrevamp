<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantType;
use App\Models\TenantPackage;
use App\Models\TenantFeature;
use App\Models\TenantPackageFeatureConstraint;


class TenantPackageFeatureConstraintTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tenantTypeWedding = TenantType::where('name', 'Wedding')->first();
        $tenantPackages = TenantPackage::all();
        $tenantWeddingBronzeFeatureConstraints = ([
            'gift_address' => 2,
            'photo_gallery' => 5,
            'background_photo' => 4,
            'music' => 1,
            'bride_groom' => 2,
            'quote' => 2,
            'money_gift' => 2,
            'agenda' => 2,
            'guest' => 100,
            'greeting' => 100,
            'video' => 1,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantWeddingSilverFeatureConstraints = ([
            'gift_address' => 2,
            'photo_gallery' => 10,
            'background_photo' => 5,
            'music' => 1,
            'bride_groom' => 2,
            'quote' => 3,
            'money_gift' => 2,
            'agenda' => 3,
            'guest' => 200,
            'greeting' => 200,
            'video' => 2,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantWeddingGoldFeatureConstraints = ([
            'gift_address' => 2,
            'photo_gallery' => 30,
            'background_photo' => 5,
            'music' => 1,
            'bride_groom' => 2,
            'quote' => 4,
            'money_gift' => 2,
            'agenda' => 4,
            'guest' => 300,
            'greeting' => 300,
            'video' => 3,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantWeddingAmethystFeatureConstraints = ([
            'gift_address' => 2,
            'photo_gallery' => 30,
            'background_photo' => 6,
            'music' => 1,
            'bride_groom' => 2,
            'quote' => 5,
            'money_gift' => 2,
            'agenda' => 5,
            'guest' => 400,
            'greeting' => 400,
            'video' => 3,
            'tema' => 1,
            'qr_code' => 1
        ]);
        $tenantCompanyEventBronzeFeatureConstraints = ([
            'photo_gallery' => 8,
            'background_photo' => 4,
            'music' => 1,
            'quote' => 4,
            'money_gift' => 2,
            'agenda' => 2,
            'guest' => 100,
            'greeting' => 100,
            'video' => 1,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantCompanyEventSilverFeatureConstraints = ([
            'photo_gallery' => 12,
            'background_photo' => 6,
            'music' => 1,
            'quote' => 6,
            'money_gift' => 2,
            'agenda' => 3,
            'guest' => 300,
            'greeting' => 300,
            'video' => 2,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantCompanyEventGoldFeatureConstraints = ([
            'photo_gallery' => 14,
            'background_photo' => 8,
            'music' => 1,
            'quote' => 8,
            'money_gift' => 2,
            'agenda' => 4,
            'guest' => 500,
            'greeting' => 500,
            'video' => 3,
            'tema' => 1,
            'qr_code' => 0
        ]);
        $tenantCompanyEventAmethystFeatureConstraints = ([
            'photo_gallery' => 20,
            'background_photo' => 10,
            'music' => 1,
            'quote' => 10,
            'money_gift' => 2,
            'agenda' => 8,
            'guest' => 800,
            'greeting' => 800,
            'video' => 4,
            'tema' => 1,
            'qr_code' => 1
        ]);


        foreach ($tenantPackages as $tenantPackage) {
            // Wedding
            if (str_contains($tenantPackage->name, 'Wedding')) {
                // Wedding Bronze 1,2,3
                if (str_contains($tenantPackage->name, 'Bronze')) {
                    foreach ($tenantWeddingBronzeFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Wedding Silver 1,2,3
                if (str_contains($tenantPackage->name, 'Silver')) {
                    foreach ($tenantWeddingSilverFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Wedding Gold 1,2,3
                if (str_contains($tenantPackage->name, 'Gold')) {
                    foreach ($tenantWeddingGoldFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Wedding Amethyst 1,2,3
                if (str_contains($tenantPackage->name, 'Amethyst')) {
                    foreach ($tenantWeddingAmethystFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
            }
            // Company Event
            if (str_contains($tenantPackage->name, 'Company Event')) {
                // Company Event Bronze 1,2,3
                if (str_contains($tenantPackage->name, 'Bronze')) {
                    foreach ($tenantCompanyEventBronzeFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Company Event Silver 1,2,3
                if (str_contains($tenantPackage->name, 'Silver')) {
                    foreach ($tenantCompanyEventSilverFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Company Event Gold 1,2,3
                if (str_contains($tenantPackage->name, 'Gold')) {
                    foreach ($tenantCompanyEventGoldFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
                // Company Event Amethyst 1,2,3
                if (str_contains($tenantPackage->name, 'Amethyst')) {
                    foreach ($tenantCompanyEventAmethystFeatureConstraints as $key => $value) {
                        $tenantFeature = TenantFeature::where('name',$key)->first();
                        TenantPackageFeatureConstraint::create([
                            'tenant_package_id' => $tenantPackage->id,
                            'tenant_feature_id' => $tenantFeature->id,
                            'max_entity' => $value
                        ]);
                    }
                }
            }
        }
    }
}
