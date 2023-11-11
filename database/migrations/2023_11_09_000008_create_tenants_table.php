<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->string('id')->primary();

            // your custom columns may go here
            $table->boolean('active');
            $table->unsignedBigInteger('tenant_theme_id');
            $table->unsignedBigInteger('tenant_package_id');
            $table->unsignedBigInteger('tenant_type_id');

            $table->timestamps();
            $table->json('data')->nullable();

            $table->foreign('tenant_package_id')->references('id')->on('tenant_packages');
            $table->foreign('tenant_theme_id')->references('id')->on('tenant_themes');
            $table->foreign('tenant_type_id')->references('id')->on('tenant_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
}
