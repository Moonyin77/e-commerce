<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\Article;
use Validator;


class CategoryController extends Controller
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
            'name' => 'required|unique:App\Category',
        ]);
        
        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
           return response()->json(['error'=>$validator->errors()], 401);            
        }

        Category::create($request->all());
        
        return response()->json(['success'=>'A category has been created'], $this-> successStatus);

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Category::find($id);
        if (is_null($data)) {
            return response()->json(["error" => "this category doesn't exist"]);
        }
        return response()->json(['success'=>$data], $this-> successStatus); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        $data = Category::all();
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
            'name' => 'unique:App\Category',
        ]);

        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
          return response()->json(['error'=>$validator->errors()], 401);
        }

        $update = ['name' => $request->input('name')];
        Category::where('id',$id)->update($update);
        return response()->json(['success'=>'Successfully updated category: '. $id], $this-> successStatus); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Category::find($id);
        if (is_null($delete)) {
            return response()->json(['error' => "Category with id : " . $id . " doesn't exist"]);
        } else {
            Category::where('id',$id)->delete();
            return response()->json(['success'=>'Successfully deleted category: '.$id], $this-> successStatus); 
        }
    }
}
