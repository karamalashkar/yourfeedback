<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function addUser(Request $request){
        $user= new User;
        
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=bcrypt($request->password);

        $check_email=$user::where('email','=',$request->email)->first();

        if($check_email){
            return response()->json([
                'status' => 'Email already exist'
            ]);    
        }
        
        $user->save();
        return response()->json([
            'status' => 'success'
        ]);
    }
}
