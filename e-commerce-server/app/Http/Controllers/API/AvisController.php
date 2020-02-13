<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Avis;

class AvisController extends Controller
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
            'user_id' => 'required',
            'article_id' => 'required',
            'comment' => 'required',
        ]);
        
        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
           return response()->json(['error'=>$validator->errors()], 401);            
        }

        Avis::create($request->all());
        return response()->json(['success'=>'A avis has been created'], $this-> successStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Avis::find($id);
        if (is_null($data)) {
            return response()->json(["error" => "this avis doesn't exist"]);
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
        $data = Avis::all();
        return response()->json(['success'=>$data], $this-> successStatus); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Avis::find($id);
        if (is_null($delete)) {
            return response()->json(['error' => "avis with id : " . $id . " doesn't exist"]);
        } else {
            Avis::where('id',$id)->delete();
            return response()->json(['success'=>'Successfully deleted avis: '.$id], $this-> successStatus); 
        }
    }
}
