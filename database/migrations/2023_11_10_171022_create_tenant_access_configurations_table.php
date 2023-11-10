<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantAccessConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenant_access_configurations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_role_id');
            $table->unsignedBigInteger('tenant_feature_permission_id');
            $table->unsignedBigInteger('user_id');
            $table->string('tenant_id');
            $table->timestamps();

            $table->foreign('tenant_role_id','tenant_access_role_id')->references('id')->on('tenant_roles')->onDelete('cascade');
            $table->foreign('tenant_feature_permission_id','tenant_access_feature_permission_id')->references('id')->on('tenant_feature_permissions')->onDelete('cascade');
            $table->foreign('user_id','tenant_access_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tenant_id','tenant_access_tenant_id')->references('id')->on('tenants')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_access_configurations');
    }
}
