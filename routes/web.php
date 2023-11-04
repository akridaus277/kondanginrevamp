<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

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

Route::get('/password/forget', function () {
    return view('Pages.forgetPassword');
});

Route::get('/password/reset/{token}', function () {
    return view('Pages.resetPassword');
})->name('password.reset');




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
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');
