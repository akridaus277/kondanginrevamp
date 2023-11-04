<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Role;
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
            'no_hp' => '089679048560',
            'alamat' => 'Klangenan',
            'kecamatan' => 'Klangenan',
            'kota' => 'Cirebon',
            'provinsi' => 'Jawa Barat'
        ]);
        User::create([
            'name' => "Dhimas",
            'email' => "dhimas@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'no_hp' => '089679048560',
            'alamat' => 'Klangenan',
            'kecamatan' => 'Klangenan',
            'kota' => 'Cirebon',
            'provinsi' => 'Jawa Barat'
        ]);
        User::create([
            'name' => "Nanda",
            'email' => "nanda@olviwedding.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
            'no_hp' => '089679048560',
            'alamat' => 'Klangenan',
            'kecamatan' => 'Klangenan',
            'kota' => 'Cirebon',
            'provinsi' => 'Jawa Barat'
        ]);
        //
        $akri = User::where('name', 'Akri')->first();
        $dhimas = User::where('name', 'Dhimas')->first();
        $nanda = User::where('name', 'Nanda')->first();


        $adminRole = Role::where('name', 'admin')->first();
        $tenantCompanyRole = Role::where('name', 'tenant_company')->first();


        $akri->giveRoleTo([$adminRole]);
        $dhimas->giveRoleTo([$adminRole]);
        $nanda->giveRoleTo([$tenantCompanyRole]);

        $companyA = Company::where('company_name', 'Company A')->first();
        $nanda->giveCompanyTo([$companyA]);



    }
}
