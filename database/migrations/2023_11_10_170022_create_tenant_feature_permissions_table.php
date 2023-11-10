<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantFeaturePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_feature_permissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_feature_id');
            $table->unsignedBigInteger('tenant_permission_id');
            $table->timestamps();

            $table->foreign('tenant_feature_id')->references('id')->on('tenant_features')->onDelete('cascade');
            $table->foreign('tenant_permission_id')->references('id')->on('tenant_permissions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_feature_permissions');
    }
}
