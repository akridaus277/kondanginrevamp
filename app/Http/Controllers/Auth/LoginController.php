<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Http;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class LoginController extends Controller
{
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'password.required' => 'Password is required.'
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        $credentials = $request->only('email', 'password');
        $user = Auth::attempt($credentials);



        if ($user) {
            $user = Auth::user();
            if (!$user->hasVerifiedEmail()) {
                return response()->apiError('Your email is not verified, please verify your email first.', 403);
            }

            $token = $user->createToken("Kondangin")->plainTextToken;
            return response()->api(["token" => $token], 200);
        }

        return response()->apiError('Incorrect email or password, please check your email and password.', 401);
    }


    public function loginGoogle(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'access_token' => 'required',
        ], [
            'access_token.required' => 'Please log in via Google first.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        $token = $request->access_token;
        try{
            $userInfo =Socialite::driver('google')->userFromToken($token);
        }catch(Exception $exception){
            return response()->apiError("Your Google account token is not valid, please log in through Google first.", 401);
        }

        $name = $userInfo->getName();
        $email = $userInfo->getEmail();

        // Check if the user is registered in your database
        $existingUser = User::where('email', $email)->first();
        if (!$existingUser) {
            // If the user is not registered, you can register them here

            // For example, create a new user record:
            $newUser = User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make(Str::random(8)),
                // Add other user details as needed
            ]);
            $newUser->markEmailAsVerified();
            $newUser->save();

            $existingUser = $newUser;
        }

        // Log in the user
        Auth::login($existingUser);

        // Generate an access token for the user
        $token = $existingUser->createToken(config('app.name'))->plainTextToken;

        return response()->api(['token' => $token], 200);

    }

    public function logout()
    {
        // Revoke the current user's token
        Auth::user()->tokens()->where('id', Auth::id())->delete();

        return response()->api('Logout successful.', 200);
    }

}
