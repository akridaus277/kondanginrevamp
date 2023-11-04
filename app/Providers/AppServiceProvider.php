<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Response::macro('api', function ($data, $status = 200) {
            return response([
                'data' => $data,
                'status' => $status,
            ], $status);
        });
        Response::macro('apiError', function ($message, $status = 400) {
            return response([
                'error' => $message,
                'status' => $status,
            ], $status);
        });

        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
