<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Category;
use App\Article;

class ArticleSearchController extends Controller
{
    public $successStatus = 200;

    /**
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $input = $request->all();
        $query = DB::table('articles');

        if (isset($input['category'])) {
            $query->where('category_id', '=', $input['category']);
        }

        if (isset($input['name'])) {
            $query->where('name', 'like', '%' . $input['name'] . '%');
        }

        if (isset($input['description'])) {
            $query->where('description', 'like', '%' . $input['description'] . '%');
        }

        if (isset($input['min_price'])) {
            $query->where('prix', '>', $input['min_price']);
        }

        if (isset($input['max_price'])) {
            $query->where('prix', '<', $input['max_price']);   
        }


        $articles = $query->orderBy('created_at', 'desc')->get();

        return response()->json(['success' => $articles], $this-> successStatus);
    }
}
