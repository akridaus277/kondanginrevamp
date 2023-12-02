<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\DomainRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "Akri",
            'email' => "akri@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        User::create([
            'name' => "Dhimas",
            'email' => "dhimas@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        User::create([
            'name' => "Hawa Undangan",
            'email' => "hawa@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        User::create([
            'name' => "Nanda",
            'email' => "nanda@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        User::create([
            'name' => "Dr. Tirta",
            'email' => "tirta@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        User::create([
            'name' => "Faishal",
            'email' => "faishal@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'phone' => '089679048560',
            'address' => 'Klangenan',
            'district' => 'Klangenan',
            'city' => 'Cirebon',
            'province' => 'Jawa Barat',
            'email_verified_at' => now()
        ]);
        //
        $akri = User::where('name', 'Akri')->first();
        $dhimas = User::where('name', 'Dhimas')->first();
        $nanda = User::where('name', 'Nanda')->first();
        $hawa = User::where('name', 'Hawa Undangan')->first();
        $tirta = User::where('name', 'Dr. Tirta')->first();


        $adminRole = DomainRole::where('name', 'admin')->first();
        $eventOrganizerRole = DomainRole::where('name', 'event_organizer')->first();
        $resellerRole = DomainRole::where('name', 'reseller')->first();
        $retailerRole = DomainRole::where('name', 'retailer')->first();

        $companyA = Company::where('company_name', 'Hawa Undangan')->first();
        $hawa->setCompany([$companyA]);



    }
}
