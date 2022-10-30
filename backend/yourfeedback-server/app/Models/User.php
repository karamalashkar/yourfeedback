<?php

namespace App\Models;
use App\Models\Business;
use App\Models\Discount;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    public function businessDiscount(){
        return $this->belongsToMany(Business::class,'discounts')->withPivot(['value'])->withTimestamps();
    }

    public function discount(){
        return $this->belongsTo(Discount::class);
    }

    public function businessFeedback(){
        return $this->belongsToMany(Business::class,'feedbacks')->withPivot(['survey_id','question_id','answer'])->withTimestamps();
    }

    public function feedback(){
        return $this->belongsTo(Feedback::class);
    }
}
