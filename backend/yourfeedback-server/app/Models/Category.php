<?php

namespace App\Models;
use App\Models\Business;
use App\Models\Question;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function business(){
        return $this->hasMany(Business::class);
    }

    public function question(){
        return $this->hasMany(Question::class);
    }
}
