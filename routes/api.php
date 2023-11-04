<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/login-google', [LoginController::class, 'loginGoogle']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');
Route::post('password/email', [PasswordResetController::class, 'sendResetLinkEmail']);
Route::post('password/reset', [PasswordResetController::class, 'reset']);


Route::middleware(['auth', 'role:admin'])->group(function () {
    // Routes accessible only to users with the 'admin' role
});

Route::middleware(['auth', 'can:edit-posts'])->group(function () {
    // Routes accessible only to users with the 'edit-posts' permission
});

