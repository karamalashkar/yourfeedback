<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('category_id');
            $table->string('bio')->default('');
            $table->string('image')->default('');
            $table->integer('latitude');
            $table->integer('longitude');
            $table->integer('feedback_code');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('businesses');    
    }
};