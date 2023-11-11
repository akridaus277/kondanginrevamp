<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsFeaturesMappingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_feature_mappings', function (Blueprint $table) {
            $table->id();
            $table->String('tenant_id');
            $table->unsignedBigInteger('tenant_feature_id');
            $table->timestamps();

            $table->foreign('tenant_id','feature_mapping_tenant_id')->references('id')->on('tenants')->onDelete('cascade');
            $table->foreign('tenant_feature_id','feature_mapping_feature_id')->references('id')->on('tenant_features')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenants_features_mapping');
    }
}
