<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Feedback;

use Carbon\Carbon;

class BusinessController extends Controller{
    // adding new business
    function addBusiness(Request $request){
        $business=new Business;

        $business->name=$request->name;
        $business->email=$request->email;
        $business->password=bcrypt($request->password);
        $business->category_id=$request->category_id;
        $business->latitude=$request->latitude;
        $business->longitude=$request->longitude;
        $business->feedback_code=$request->feedback_code;

        $check_email=$business::where('email','=',$request->email)->first();
        
        if($check_email){
            return response()->json([
                'status' => 'failed'
            ]);
        }
        
        $business->save();
        return response()->json([
            'status' => 'success'
        ]);
    }

    //edit business
    function editBusiness(Request $request){
        $business_id=$request->business_id;
        $name=$request->name;
        $bio=$request->bio;

        //base 64 to image
        $base64Image = explode(";base64,", $request->image);
        $explodeImage = explode("image/", $base64Image[0]);
        $imageType = $explodeImage[1];
        $image_base64 = base64_decode($base64Image[1]);
        $imageName = $business_id.'.'.'png';
        \File::put(public_path('assets'). '/' . $imageName, base64_decode($base64Image[1]));

        $business=Business::where('id',$business_id)
        ->update(['name'=>$name,'bio'=>$bio,'image'=>$imageName]);

        if($business){
            return response()->json([
                'status' => 'success'
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    //get all discounts by business id
    function getBusiness(Request $request){
        $business_id=$request->id;

        $business=Business::find($business_id);

        if($business){
            return response()->json([
                'status' => 'success',
                'data' => $business
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    //get all businesses by category id
    function businessByCategory(Request $request){
        $category_id=$request->id;
        
        $response=Category::where('id',$category_id)->with('business')->get();
        
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

    //get the nearest businesses according to user location
    function nearBusiness(Request $request){
        $latitude=$request->latitude;
        $longitude=$request->longitude;
        
        $response = Business::selectRaw('*, ( 6367 * acos( cos( radians( '.$latitude.' ) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians( '.$longitude.' ) ) + sin( radians( '.$latitude.' ) ) * sin( radians( latitude ) ) ) ) AS distance')
        ->having('distance', '<', 5000)
        ->orderBy('distance')
        ->get();

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

    //get businesses by business name
    function searchBusiness(Request $request){
        $word=$request->word;

        $response = Business::where('name', 'like', "%{$word}%")->get();

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

    //get the total number of discount by business id
    function countDiscount(Request $request){
        $business_id=$request->id;
        $response=Discount::where('business_id',$business_id)->count();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);
    }

    //get the total number of feedback by business id
    function countFeedback(Request $request){
        $business_id=$request->id;
        $response=Feedback::where('business_id',$business_id)->distinct('survey_id')->count();

        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);
    }

    //get all feedback by business id
    function getFeedback(Request $request){
        $business_id=$request->id;
        $response=Feedback::where('business_id',$business_id)
        ->with('user')
        ->with('question')
        ->orderBy('created_at','DESC')
        ->get()
        ->groupBy('survey_id')
        ->toArray();

        if($response){
            return response()->json([
                'data' => $response
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

    //get all discounts by business id
    function getDiscount(Request $request){
        $business_id=$request->id;
        $response=Discount::where('business_id',$business_id)
        ->with('user')
        ->orderBy('created_at','DESC')
        ->get()
        ->toArray();

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

    //get the total number of discount in week by business id
    function discountWeek(Request $request){
        $business_id=$request->id;
        
        $response = Discount::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subWeek()) 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //get the total number of discount in month by business id
    function discountMonth(Request $request){
        $business_id=$request->id;
        
        $response = Discount::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subMonth()) 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //get the total number of discount in year by business id
    function discountYear(Request $request){
        $business_id=$request->id;
        
        $response = Discount::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subYear()) 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //get the total number of feedback in week by business id
    function feedbackWeek(Request $request){
        $business_id=$request->id;
        
        $response = Feedback::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subWeek())
            ->distinct('survey_id') 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //get the total number of feedback in month by business id
    function feedbackMonth(Request $request){
        $business_id=$request->id;
        
        $response = Feedback::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subMonth())
            ->distinct('survey_id') 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //get the total number of feedback in year by business id
    function feedbackYear(Request $request){
        $business_id=$request->id;
        
        $response = Feedback::where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subYear())
            ->distinct('survey_id') 
            ->count();
        
        if($response){
            return response()->json([
                'status' => 'success',
                'data' => $response
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
            'data' => $response
        ]);    
    }

    //check if user can make a feedback
    public function canMakeFeedback(Request $request){
        $user_id=$request->id;
        $business_id=$request->business_id;
        
        $response = Feedback::where('user_id',$user_id)->where('business_id','=',$business_id)    
            ->where('created_at','>',now()->subMonth()) 
            ->get();
        
        if($response){
            return response()->json([
                'status' => 'success',
            ]);
        }
    
        return response()->json([
            'status' => 'failed',
        ]);
    }


}

