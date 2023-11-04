<?php

namespace Database\Seeders;

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
        DB::table('users')->insert([
            'name' => "Akri",
            'email' => "akri@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
        ]);
        DB::table('users')->insert([
            'name' => "Dhimas",
            'email' => "dhimas@kondangin.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
        ]);
        DB::table('users')->insert([
            'name' => "Nanda",
            'email' => "nanda@olviwedding.org",
            'password' => Hash::make('Kondangin1!'), // You can set a default password here
        ]);
        //
        $akri = User::where('name', 'Akri')->first();
        $dhimas = User::where('name', 'Dhimas')->first();
        $nanda = User::where('name', 'Nanda')->first();


        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();


        $akri->giveRoleTo([$adminRole]);
        $dhimas->giveRoleTo([$adminRole]);
        $nanda->giveRoleTo([$userRole]);

    }
}
