<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function business(){
        return $this->belongsTo(Business::class,'business_id');
    }

    public function question(){
        return $this->belongsTo(Question::class,'question_id');
    }
}
