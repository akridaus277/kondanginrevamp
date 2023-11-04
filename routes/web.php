<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/login', function () {
    return view('Pages.login');
});

Route::get('/register', function () {
    return view('Pages.register');
});

Route::get('/forgetPassword', function () {
    return view('Pages.forgetPassword');
});

Route::get('/resetPassword', function () {
    return view('Pages.resetPassword');
});




Route::get('/', function () {
    return view('example');
});

Route::get('/coba', function () {
    return view('coba');
});



Route::get('/koneksiTerputus', function () {
    return view('koneksiPutus');
});

Route::get('/offline', function () {

    return view('offlinePage');

});
