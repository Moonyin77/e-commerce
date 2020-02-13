<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;
use App\Category;
use Validator;


class ArticleController extends Controller
{
    public $successStatus = 200;

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'category_id' => 'required',
            'modele' => 'required',
            'marque' => 'required',
            'prix' => 'required',
            'description' => 'required',
            'reference' => 'unique:App\Article',
        ]);
        
        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
           return response()->json(['error'=>$validator->errors()], 401);            
        }
        Article::create($request->all());
        return response()->json(['success'=> 'Your article has been created'], $this-> successStatus);
    }
    


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //find l'article with id 
        $data = Article::find($id);
        $data['avis'] = $data->avis;

        if (count($data['avis']) > 0) {
          foreach ($data['avis'] as $avis) {
            $avis['user'] = $avis->user;
          }
        }
        
        if (is_null($data)) {
            return response()->json(["error" => "this article doesn't exist"]);
        }
        return response()->json(['success'=>$data], $this-> successStatus); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        //Show all Article
        $data = Article::all();
        return response()->json(['success'=>$data], $this-> successStatus); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'category_id' => 'required',
            'modele' => 'required',
            'marque' => 'required',
            'prix' => 'required',
            'description' => 'required',
            'reference' => 'required'
        ]);

        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
          return response()->json(['error'=>$validator->errors()], 401);            
        }

        $update = ['name' => $request->input('name'), 'prix' => $request->input('prix'), 'reference' => $request->input('reference'), 'modele' => $request->input('modele'), 'marque' => $request->input('marque'), 'description' => $request->input('description')];
        Article::where('id',$id)->update($update);
        return response()->json(['success'=>'Successfully updated article: '. $id], $this-> successStatus); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Article::where('id',$id)->delete();
        return response()->json(['success'=>'Successfully deleted article: '.$id], $this-> successStatus); 
    }

    public function test () {
        $test = Category::find(1);
        return response()->json(['success'=>$test->article  ], $this-> successStatus);
    }
}
