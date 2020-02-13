<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('login', 'API\UserController@login'); // /api/auth/login
    Route::post('register', 'API\UserController@register'); // /api/auth/register
});

// ROUTE FOR DISPLAY CATEGORY  
Route::prefix('category')->group(function () {
    Route::get('show/{id}', 'API\CategoryController@show');
    Route::get('showAll', 'API\CategoryController@showAll');
});
// ROUTE FOR DISPLAY ARTICLE
Route::prefix('article')->group(function () {
    Route::get('show/{id}', 'API\ArticleController@show');
    Route::get('search', 'API\ArticleSearchController@search');
    Route::get('showAll', 'API\ArticleController@showAll');
});
// ROUTE FOR DISPLAY AVIS
Route::prefix('avis')->group(function () {
  Route::get('show/{id}', 'API\AvisController@show');
  Route::get('showAll', 'API\AvisController@showAll');
});

Route::get('test', 'API\AvisController@test');

Route::group(['middleware' => 'auth:api'], function(){
    // NEED TO BE AUTHED WITH ROLE_USER
    Route::middleware(['user'])->group(function () {
      Route::post('avis/create', 'API\AvisController@create');
    });
    
    // NEED TO BE AUTHED WITH ROLE_ADMIN
    Route::middleware(['admin'])->group(function () {
        Route::prefix('admin')->group(function () {
            Route::post('category/create', 'API\CategoryController@create');
            Route::post('category/update/{id}', 'API\CategoryController@update');
            Route::delete('category/destroy/{id}', 'API\CategoryController@destroy');
            
            Route::post('article/create', 'API\ArticleController@create');
            Route::post('article/update/{id}', 'API\ArticleController@update');
            Route::delete('article/destroy/{id}', 'API\ArticleController@destroy');

            Route::post('user/update/{id}', 'API\UserController@adminUpdate');
            Route::get('user/show/{id}', 'API\UserController@show');
            Route::get('user/showAll', 'API\UserController@showAll');
            Route::delete('user/delete/{id}', 'API\UserController@destroy');

            Route::delete('avis/destroy/{id}', 'API\AvisController@destroy');
        });
    });

    Route::get('auth/details', 'API\UserController@details'); // /api/auth/details
});