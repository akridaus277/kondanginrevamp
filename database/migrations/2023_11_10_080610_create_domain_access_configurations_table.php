<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDomainAccessConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domain_access_configurations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('domain_role_id');
            $table->unsignedBigInteger('domain_feature_permission_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('domain_role_id','domain_access_role_id')->references('id')->on('domain_roles')->onDelete('cascade');
            $table->foreign('domain_feature_permission_id','domain_access_feature_permission_id')->references('id')->on('domain_feature_permissions')->onDelete('cascade');
            $table->foreign('user_id','domain_access_user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('domain_access_configurations');
    }
}
