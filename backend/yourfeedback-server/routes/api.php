<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;

Route::group(["prefix"=> "user"], function(){
    Route::get('/get_user/{id}',[UserController::class,'getUser']);
    Route::get('/question_category/{id}',[UserController::class,'questionByCategory']);
    Route::post('/discount',[UserController::class,'discount']);
    Route::get('/get_discount/{id}',[UserController::class,'getDiscount']);
    Route::get('/count_discount/{id}',[UserController::class,'countDiscount']);
    Route::post('/feedback',[UserController::class,'feedback']);
    Route::get('/get_feedback/{id}',[UserController::class,'getFeedback']);
});

Route::group(["prefix"=> "business"], function(){
    Route::get('/get_business/{id}',[BusinessController::class,'getBusiness']);
    Route::post('/edit_business',[BusinessController::class,'editBusiness']);
    Route::get('/business_category/{id}',[BusinessController::class,'businessByCategory']);
    Route::post('/near_business',[BusinessController::class,'nearBusiness']);
    Route::get('/search_business/{word}',[BusinessController::class,'searchBusiness']);        
});

Route::post('/add_user',[UserController::class,'addUser']);
Route::post('/add_business',[BusinessController::class,'addBusiness']);