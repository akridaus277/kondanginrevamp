<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DomainFeature;

class DomainFeatureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DomainFeature::create(['name' => 'user_invitation']);
        DomainFeature::create(['name' => 'admin_invitation']);
        DomainFeature::create(['name' => 'user_company_profile']);
        DomainFeature::create(['name' => 'user_whatsapp_blast']);
        DomainFeature::create(['name' => 'admin_whatsapp_blast']);
        DomainFeature::create(['name' => 'user_dashboard']);
        DomainFeature::create(['name' => 'admin_dashboard']);
        DomainFeature::create(['name' => 'user_guest_export']);
        DomainFeature::create(['name' => 'admin_guest_export']);
        DomainFeature::create(['name' => 'user_shopping']);

        $tenantInvitationFeature = DomainFeature::where('name', 'user_invitation')->first();
        $adminInvitationFeature = DomainFeature::where('name', 'admin_invitation')->first();
        $tenantCompanyProfileFeature = DomainFeature::where('name', 'user_company_profile')->first();
        $tenantWhatsappBlastFeature = DomainFeature::where('name', 'user_whatsapp_blast')->first();
        $adminWhatsappBlastFeature = DomainFeature::where('name', 'admin_whatsapp_blast')->first();
        $tenantDashboardFeature = DomainFeature::where('name', 'user_dashboard')->first();
        $adminDashboardFeature = DomainFeature::where('name', 'admin_dashboard')->first();
        $tenantGuestExportFeature = DomainFeature::where('name', 'user_guest_export')->first();
        $adminGuestExportFeature = DomainFeature::where('name', 'admin_guest_export')->first();
        //
    }
}
