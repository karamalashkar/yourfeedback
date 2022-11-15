<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Config;
use App\Models\User;
use App\Models\Business;

class AuthController extends Controller
{
    
    public function login(Request $request){
		Config()->set('auth.defaults.guard','api');
        Config::set('jwt.user', 'App\User'); 
		Config::set('auth.providers.users.model', \App\User::class);
		$credentials = $request->only('email', 'password');
		$token = null;
		try {
		    if (!$token = Auth::attempt($credentials)) {
		        return response()->json([
		            'response' => 'error',
		            'message' => 'invalid_email_or_password',
		        ]);
		    }
		} catch (JWTAuthException $e) {
		    return response()->json([
		        'response' => 'error',
		        'message' => 'failed_to_create_token',
		    ]);
		}
		return response()->json([
		    'response' => 'success',
            'user' => Auth::user(),
		    'result' => [
		        'token' => $token,
		    ],
		]);
    }

    public function businessLogin(Request $request){
        Config()->set('auth.defaults.guard','business');
        Config::set('jwt.user', 'App\Business'); 
		Config::set('auth.providers.users.model', \App\Business::class);
		$credentials = $request->only('email', 'password');
		$token = null;
		try {
		    if (!$token = Auth::attempt($credentials)) {
		        return response()->json([
		            'response' => 'error',
		            'message' => 'invalid_email_or_password',
		        ]);
		    }
		} catch (JWTAuthException $e) {
		    return response()->json([
		        'response' => 'error',
		        'message' => 'failed_to_create_token',
		    ]);
		}
        $business=Business::where('email', $request->email)->first()->id;
		return response()->json([
		    'response' => 'success',
            'business' => $business,
		    'result' => [
		        'token' => $token,
		    ],
		]);
    }

    public function logout(){
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh(){
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}