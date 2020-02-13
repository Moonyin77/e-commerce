<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\User; 
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            return response()->json(['success' => $success], $this-> successStatus); 
        }
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        }
    }

    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    {   

        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email|unique:App\User,email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);

        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 400);            
        }

        // Get inputs & hash password
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 

        // Create user 
        $user = User::create($input); 

        // Create webtoken
        $success['token'] =  $user->createToken('MyApp')-> accessToken; 
        $success['name'] =  $user->name;

        return response()->json(['success'=>$success], $this-> successStatus); 
    }

    /** 
     * admin update an user api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function adminUpdate(Request $request, $id) 
    {   

        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'role' => [
              'required',
              Rule::in(['ROLE_USER', 'ROLE_ADMIN']),
          ],
        ]);

        // If there is an error in the inputs return an error response
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 400);            
        }

        // Get inputs & update
        $inputs = $request->all();
        User::find($id)->update($inputs);

        $success = 'Successfuly updated user';
        return response()->json(['success'=>$success], $this-> successStatus); 
    }

    /** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user();
        return response()->json(['success' => $user], $this-> successStatus); 
    }

    /** 
     * show all api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function showAll() 
    { 
        $users = User::all();
        return response()->json(['success' => $users], $this-> successStatus); 
    }

    /** 
     * show  one by id api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function show($id) 
    { 
        $user = User::find($id);
        return response()->json(['success' => $user], $this-> successStatus); 
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = User::find($id);
        if (is_null($delete)) {
            return response()->json(['error' => "User with id : " . $id . " doesn't exist"]);
        } else {
            User::where('id',$id)->delete();
            return response()->json(['success'=>'Successfully deleted user: '.$id], $this-> successStatus); 
        }
    }
}
