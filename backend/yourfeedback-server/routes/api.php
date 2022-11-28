<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthBusinessController;

Route::group(["prefix"=> "v1"], function(){
    Route::group(["prefix"=> "user"], function(){
        Route::group(["middleware" => "auth:api"], function(){
            Route::get('/{id}',[UserController::class,'getUser']);
            Route::get('/question_category/{id}',[UserController::class,'questionByCategory']);
            Route::post('/discount',[UserController::class,'discount']);
            Route::get('/discount/{id}',[UserController::class,'getDiscount']);
            Route::get('/count_discount/{id}',[UserController::class,'countDiscount']);
            Route::post('/feedback',[UserController::class,'feedback']);
            Route::get('/feedback/{id}',[UserController::class,'getFeedback']);
            Route::get('/count_feedback/{id}',[UserController::class,'countFeedback']);
            Route::get('/business_category/{id}',[BusinessController::class,'businessByCategory']);
            Route::get('/near_business/{latitude}/{longitude}',[BusinessController::class,'nearBusiness']);
            Route::get('/search_business/{word}',[BusinessController::class,'searchBusiness']);
            Route::get('/make_feedback/{id}/{business_id}',[BusinessController::class,'canMakeFeedback']);
            Route::get('/recent_feedback/{id}',[UserController::class,'recentFeedback']);
            Route::get('/recent_discount/{id}',[UserController::class,'recentDiscount']);
        });
    });

    Route::group(["prefix"=> "business"], function(){
        Route::group(["middleware" => "auth:business"], function(){
            Route::get('/{id}',[BusinessController::class,'getBusiness']);
            Route::post('/edit',[BusinessController::class,'editBusiness']);
            Route::get('/count_discount/{id}',[BusinessController::class,'countDiscount']);
            Route::get('/count_feedback/{id}',[BusinessController::class,'countFeedback']);
            Route::get('/feedback/{id}',[BusinessController::class,'getFeedback']);        
            Route::get('/discount/{id}',[BusinessController::class,'getDiscount']);
            Route::get('/discount_week/{id}',[BusinessController::class,'discountWeek']);
            Route::get('/discount_month/{id}',[BusinessController::class,'discountMonth']);
            Route::get('/discount_year/{id}',[BusinessController::class,'discountYear']);
            Route::get('/feedback_week/{id}',[BusinessController::class,'feedbackWeek']); 
            Route::get('/feedback_month/{id}',[BusinessController::class,'feedbackMonth']);
            Route::get('/feedback_year/{id}',[BusinessController::class,'feedbackYear']);
            Route::get('/update_discount/{code}',[BusinessController::class,'updateDiscount']);
            Route::get('/used_discount/{id}',[BusinessController::class,'countUsedDiscount']);
        });        
    });

    Route::post('/user',[UserController::class,'addUser']);
    Route::post('/business',[BusinessController::class,'addBusiness']);
    Route::post('/login',[AuthController::class,'login']);
    Route::post('/business_login',[AuthController::class,'businessLogin']);
    Route::get('/testlaravel',[UserController::class,'test']);
});