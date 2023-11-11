<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantPackageFeatureConstraintsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_package_feature_constraints', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_package_id');
            $table->unsignedBigInteger('tenant_feature_id');
            $table->integer('max_entity');
            $table->timestamps();

            $table->foreign('tenant_package_id','tenant_constraint_package_id')->references('id')->on('tenant_packages')->onDelete('cascade');
            $table->foreign('tenant_feature_id','tenant_constraint_feature_id')->references('id')->on('tenant_features')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_package_feature_constraints');
    }
}
