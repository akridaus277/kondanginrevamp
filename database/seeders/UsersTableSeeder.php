<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        //
    }
}
