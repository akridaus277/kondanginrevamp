<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DomainRole;

class DomainRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DomainRole::create(['name' => 'admin']);
        DomainRole::create(['name' => 'event_organizer']);
        DomainRole::create(['name' => 'reseller']);
        DomainRole::create(['name' => 'retailer']);


        $adminRole = DomainRole::where('name', 'admin')->first();
        $eventOrganizerRole = DomainRole::where('name', 'event_organizer')->first();
        $resellerRole = DomainRole::where('name', 'reseller')->first();
        $retailerRole = DomainRole::where('name', 'retailer')->first();


    }
}
