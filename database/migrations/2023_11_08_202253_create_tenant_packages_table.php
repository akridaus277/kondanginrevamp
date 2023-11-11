<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_packages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('price');
            $table->unsignedBigInteger('tenant_type_id');
            $table->timestamps();

            $table->foreign('tenant_type_id')->references('id')->on('tenant_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_packages');
    }
}
