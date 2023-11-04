<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;


class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'view post']);
        Permission::create(['name' => 'create post']);
        Permission::create(['name' => 'edit post']);
        Permission::create(['name' => 'delete post']);
        //
    }
}
