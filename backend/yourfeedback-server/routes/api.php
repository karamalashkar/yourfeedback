<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;

Route::post('/add_user',[UserController::class,'addUser']);
Route::post('/add_business',[BusinessController::class,'addBusiness']);