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

    function editBusiness(Request $request){
        $user_id=$request->user_id;
        $bio=$request->bio;

        //base 64 to image
        $base64Image = explode(";base64,", $request->image);
        $explodeImage = explode("image/", $base64Image[0]);
        $imageType = $explodeImage[1];
        $image_base64 = base64_decode($base64Image[1]);
        $imageName = $user_id.'.'.'png';
        \File::put(public_path('assets'). '/' . $imageName, base64_decode($base64Image[1]));

        $business=Business::where('id',$user_id)
        ->update(['bio'=>$bio,'image'=>$imageName]);

        if($business){
            return response()->json([
                'status' => 'success'
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }
}

