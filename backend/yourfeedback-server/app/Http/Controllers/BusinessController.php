<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;

class BusinessController extends Controller
{
    function addBusiness(Request $request){
        $business=new Business;

        $business->name=$request->name;
        $business->email=$request->email;
        $business->password=bcrypt($request->password);
        $business->category_id=$request->category_id;
        $business->latitude=$request->latitude;
        $business->longitude=$request->longitude;

        $check_email=$business::where('email','=',$request->email)->first();
        
        if($check_email){
            return response()->json([
                'status' => 'Email already exist'
            ]);
        }
        
        $business->save();
        return response()->json([
            'status' => 'success'
        ]);
    }
}

