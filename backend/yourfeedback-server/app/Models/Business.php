<?php

namespace App\Models;
use App\Models\Category;

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
}
