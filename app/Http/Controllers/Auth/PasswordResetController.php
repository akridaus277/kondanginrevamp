<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Carbon\Carbon;
use Exception;

class PasswordResetController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        // Check if the user is registered in your database
        $existingUser = User::where('email', $request->email)->first();
        if (!$existingUser) {
            // If the user is not registered, you can register them here
            return response()->apiError("User not found", 404);
        }


            $status = Password::sendResetLink(
                $request->only('email')
            );

            return $status === Password::RESET_LINK_SENT
                ? response()->api('Password reset link sent successfully to your email.', 200)
                : response()->apiError('Failed to send password reset link.', 500);



    }

    public function reset(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'token.required' => 'Token is required.',
            'password.required' => 'Password is required.',
            'password.min' => 'Password must be at least 6 characters.',
            'password.confirmed' => 'Password confirmation does not match.'
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        // Check if the user is registered in your database
        $existingUser = User::where('email', $request->email)->first();
        if (!$existingUser) {
            // If the user is not registered, you can register them here
            return response()->apiError("User not found", 404);
        }
        // Retrieve the token record
        $tokenRecord = DB::table('password_resets')
        ->where('email', $request->email)
        ->first();

        // Check if the token record exists and if it's expired
        if (!$tokenRecord || !Password::broker()->tokenExists($existingUser, $request->token) || Carbon::parse($tokenRecord->created_at)->addMinutes(config('auth.passwords.users.expire')) < Carbon::now()) {
            return response()->apiError("Invalid or expired reset password token.", 400);
        }
        /* if (!(Password::broker()->tokenExists($existingUser, $request->token) && !Password::tokenExpired($request->token))) {
            return response()->apiError("Token reset password tidak valid.", 400);
        } */


        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->api('Password successfully reset.', 200)
            : response()->apiError('Failed to reset password.', 400);

    }
}
