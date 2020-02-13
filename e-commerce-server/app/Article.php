<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'name', 'reference', 'modele', 'marque', 'prix', 'description', 'category_id'
       ];

    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function avis() {
      return $this->hasMany('App\Avis');
    }

}
