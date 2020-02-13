<?php

namespace App\Http\Middleware;

use Closure;

class isAdmin
{
    /**
     * Check if an user has ROLE_ADMIN, otherwise return 403 json response
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

        if (!$request->user()->hasRole('ROLE_ADMIN')) {
            return response()->json(['error'=>'Unauthorised'], 401); 
        }

        return $next($request);
    }
}
