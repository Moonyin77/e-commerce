<?php

namespace App\Http\Middleware;

use Closure;

class isUser
{
    /**
     * If user is not ROLE_USER or ROLE_ADMIN return 401 error
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    { 
        if (!$request->user()) {
            return response()->json(['error'=>'Unauthorised'], 401); 
        }
        
        if ($request->user()->hasRole('ROLE_USER') OR $request->user()->hasRole('ROLE_ADMIN')) {
            return $next($request);
        }
        
        return response()->json(['error'=>'Unauthorised'], 401); 
    }
}
