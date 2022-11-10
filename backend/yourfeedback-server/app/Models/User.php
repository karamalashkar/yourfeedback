<?php

namespace App\Models;
use App\Models\Business;
use App\Models\Discount;
use App\Models\Feedback;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

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

    public function businessDiscount(){
        return $this->belongsToMany(Business::class,'discounts')->withPivot(['value'])->withTimestamps();
    }

    public function discount(){
        return $this->belongsTo(Discount::class);
    }

    public function businessFeedback(){
        return $this->belongsToMany(Business::class,'feedback')->withPivot(['survey_id','question_id','answer'])->withTimestamps();
    }

    public function feedback(){
        return $this->belongsTo(Feedback::class);
    }
}
