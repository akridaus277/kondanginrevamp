<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyBySubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use Illuminate\Http\Request;
use App\Http\Controllers\TenantUserController;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

// web routes
Route::middleware([
    'web',
    InitializeTenancyBySubdomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    Route::get('/', function () {
        return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
    });
});

// api routes
Route::middleware([
    'api',
    InitializeTenancyBySubdomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function ($router) {
    /* Route::get('api/to/{nama_tamu}', function ($nama_tamu) {
        $controller = new TenantController();
        return $controller->show(tenant(), $nama_tamu);
    }); */
    Route::get('api/user', function (Request $request) {
        $controller = new TenantUserController();
        return $controller->tenantUserInfo(tenant(), $request);
    })->middleware('auth:sanctum');



});

