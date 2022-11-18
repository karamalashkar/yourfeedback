<?php

namespace App\Models;
use App\Models\User;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Feedback;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Business as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class Business extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    protected $hidden = [
        'password',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function userDiscount(){
        return $this->belongsToMany(User::class,'discounts')->withPivot(['value','code','used'])->withTimestamps();
    }

    public function discount(){
        return $this->belongsTo(Discount::class);
    }

    public function userFeedback(){
        return $this->belongsToMany(User::class,'feedback')->withPivot(['survey_id','question_id','answer'])->withTimestamps();
    }

    public function feedback(){
        return $this->belongsTo(Feedback::class);
    }
}
