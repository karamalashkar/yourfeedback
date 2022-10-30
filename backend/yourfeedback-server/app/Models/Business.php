<?php

namespace App\Models;
use App\Models\User;
use App\Models\Category;
use App\Models\Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;

    protected $hidden = [
        'password',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function userDiscount(){
        return $this->belongsToMany(User::class,'discounts')->withPivot(['value'])->withTimestamps();
    }

    public function discount(){
        return $this->belongsTo(Discount::class);
    }

    public function userFeedback(){
        return $this->belongsToMany(User::class,'feedbacks')->withPivot(['survey_id','question_id','answer'])->withTimestamps();
    }

    public function feedback(){
        return $this->belongsTo(Feedback::class);
    }
}
