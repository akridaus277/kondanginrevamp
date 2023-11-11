<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantThemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_themes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('cover');
            $table->unsignedBigInteger('tenant_package_id');
            $table->timestamps();

            $table->foreign('tenant_package_id')->references('id')->on('tenant_packages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_themes');
    }
}
