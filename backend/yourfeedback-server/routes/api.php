<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;

Route::group(["prefix"=> "business"], function(){
    Route::post('/edit_business',[BusinessController::class,'editBusiness']);        
});

Route::post('/add_user',[UserController::class,'addUser']);
Route::post('/add_business',[BusinessController::class,'addBusiness']);