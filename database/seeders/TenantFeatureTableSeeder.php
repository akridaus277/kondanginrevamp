<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TenantFeature;

class TenantFeatureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TenantFeature::create(['name' => 'gift_address']);
        TenantFeature::create(['name' => 'photo_gallery']);
        TenantFeature::create(['name' => 'background_photo']);
        TenantFeature::create(['name' => 'music']);
        TenantFeature::create(['name' => 'bride_groom']);
        TenantFeature::create(['name' => 'quote']);
        TenantFeature::create(['name' => 'money_gift']);
        TenantFeature::create(['name' => 'agenda']);
        TenantFeature::create(['name' => 'guest']);
        TenantFeature::create(['name' => 'greeting']);
        TenantFeature::create(['name' => 'video']);
        TenantFeature::create(['name' => 'tema']);
        TenantFeature::create(['name' => 'qr_code']);
        //
    }
}
