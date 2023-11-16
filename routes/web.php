<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;

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


Route::get('/landingPage', function () {
    return view('Pages.landingPage');
});

Route::get('/login', function () {
    return view('Pages.login');
});

Route::get('/memberArea', function () {
    return view('Pages.memberArea');
});

Route::get('/memberArea/shopping', function () {
    return view('Pages.shopping');
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

Route::get('/verifEmail', function () {
    return view('Pages.verifEmail');
});

Route::get('/verifEmailSuccess', function () {
    return view('Pages.verifEmailSuccess');
});

Route::get('/verifEmailFailed', function () {
    return view('Pages.verifEmailFailed');
});




Route::get('/', function () {
    return view('example');
});

Route::get('/coba', function () {
    return view('coba');
});



Route::get('/koneksiTerputus', function () {
    return view('offlinePage');
});

Route::get('/offline', function () {

    return view('offlinePage');

});
Route::get('/email/verify/{id}/{token}', [RegisterController::class, 'verify']);

