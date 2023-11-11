<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CompaniesTableSeeder::class);
        $this->call(DomainFeatureTableSeeder::class);
        $this->call(DomainPermissionTableSeeder::class);
        $this->call(DomainFeaturePermissionTableSeeder::class);
        $this->call(DomainRoleTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(DomainAccessConfigurationTableSeeder::class);
        $this->call(TenantTypeTableSeeder::class);
        $this->call(TenantPackageTableSeeder::class);
        $this->call(TenantThemeTableSeeder::class);
        $this->call(TenantTableSeeder::class);
        $this->call(TenantRoleTableSeeder::class);
        $this->call(TenantFeatureTableSeeder::class);
        $this->call(TenantPermissionTableSeeder::class);
        $this->call(TenantFeaturePermissionTableSeeder::class);
        $this->call(TenantAccessConfigurationTableSeeder::class);
        $this->call(TenantPackageFeatureConstraintTableSeeder::class);
        $this->call(TenantFeatureMappingTableSeeder::class);

        // \App\Models\User::factory(10)->create();
    }
}
