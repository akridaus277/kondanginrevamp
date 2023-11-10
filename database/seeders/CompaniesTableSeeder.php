<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompaniesTableSeeder extends Seeder
{
    public function run()
    {
        // Data dummy untuk tabel companies
        $datas = [
            ['company_name' => 'Hawa Undangan']
            // Tambahkan data lain sesuai kebutuhan
        ];

        // Memasukkan data ke tabel companies
        foreach ($datas as $data) {
            Company::create([
                'company_name' => $data['company_name']
            ]);
        }
    }
}
