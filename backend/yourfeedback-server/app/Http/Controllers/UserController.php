<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Feedback;

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

    function getUser(Request $request){
        $user_id=$request->id;

        $user=User::find($user_id);

        if($user){
            return response()->json([
                'status' => 'success',
                'data' => $user
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function questionByCategory(Request $request){
        $category_id=$request->id;

        $response=Category::where('id',$category_id)->with('question')->get();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function discount(Request $request){
        $user_id=$request->user_id;
        $business_id=$request->business_id;
        $value=$request->value;
        $code=$request->code;
        $used=$request->used;

        $user=User::find($user_id);
        $response=$user->businessDiscount()->attach($business_id,['value'=>$value,'code'=>$code,'used'=>$used]);

        return response()->json([
            'status' => 'success',
        ]);
    }

    function getDiscount(Request $request){
        $user_id=$request->id;
        $response=Discount::where('user_id',$user_id)->with('business')->get();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function countDiscount(Request $request){
        $user_id=$request->id;
        $response=Discount::where('user_id',$user_id)->count();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function feedback(Request $request){
        $user_id=$request->user_id;
        $business_id=$request->business_id;
        $survey_id=$request->survey_id;
        $question_id=$request->question_id;
        $answer=$request->answer;

        $user=User::find($user_id);
        $response=$user->businessFeedback()
        ->attach($business_id,['survey_id'=>$survey_id,'question_id'=>$question_id,'answer'=>$answer]);
        
        return response()->json([
            'status' => 'success',
        ]);
    }

    function getFeedback(Request $request){
        $user_id=$request->id;
        $response=Feedback::where('user_id',$user_id)->with('business')->with('question')->orderBy('created_at','DESC')->distinct('survey_id')->get()->groupBy('survey_id');

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function countFeedback(Request $request){
        $user_id=$request->id;
        $response=Feedback::where('user_id',$user_id)->distinct('survey_id')->count();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function recentFeedback(Request $request){
        $user_id=$request->id;
        $response=Feedback::where('user_id',$user_id)->with('business')->orderBy('created_at','DESC')->first();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    function recentDiscount(Request $request){
        $user_id=$request->id;
        $response=Discount::where('user_id',$user_id)->with('business')->orderBy('created_at','DESC')->first();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }
}
