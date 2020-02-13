<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avis extends Model
{

  protected $fillable = [
    'comment', 'user_id', 'article_id'
   ];

  public function user() {
    return $this->belongsTo('App\User');
  }

  public function article() {
    return $this->belongsTo('App\Article');
  }
}
