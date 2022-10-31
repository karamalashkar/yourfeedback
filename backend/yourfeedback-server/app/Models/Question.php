<?php

namespace App\Models;
use App\Models\Category;
use App\Models\Feedback;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function feedback(){
        return $this->belongsTo(Feedback::class);
    }
}
