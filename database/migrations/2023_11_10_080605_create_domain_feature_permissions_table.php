<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDomainFeaturePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domain_feature_permissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('domain_feature_id');
            $table->unsignedBigInteger('domain_permission_id');
            $table->timestamps();

            $table->foreign('domain_feature_id')->references('id')->on('domain_features')->onDelete('cascade');
            $table->foreign('domain_permission_id')->references('id')->on('domain_permissions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('domain_feature_permissions');
    }
}
