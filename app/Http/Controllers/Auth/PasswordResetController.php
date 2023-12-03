<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\PasswordResetMail;
use App\Models\EmailVerification;
use App\Models\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

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

        $passwordReset = PasswordReset::where('email', $existingUser->email)->first();
        if (!$passwordReset) {
            $passwordReset = new PasswordReset(['token' => Str::random(64), 'email' => $existingUser->email]);
        }else{
            $passwordReset->token = Str::random(64);
        }

        $passwordReset->save();
        Mail::to($existingUser->email)->send(new PasswordResetMail($existingUser->name,$passwordReset->token,$existingUser->email));

        if (count(Mail::failures()) > 0) {
            response()->apiError('Failed to send password reset link.', 500);
        }

        return response()->api('Password reset link sent successfully to your email.', 200);

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
        $tokenRecord = PasswordReset::where('email', $request->email)->first();

        // Check if the token record exists and if it's expired
        if (!$tokenRecord || Carbon::parse($tokenRecord->updated_at)->addMinutes(config('auth.passwords.users.expire')) < Carbon::now()) {
            return response()->apiError("Invalid or expired reset password token.", 400);
        }

        if ($tokenRecord && $tokenRecord->token != $request->token) {
            return response()->apiError("Invalid or expired reset password token.", 400);
        }

        $existingUser->forceFill([
            'password' => Hash::make($request->password),
        ])->save();
        $tokenRecord->delete();

        return response()->api('Password successfully reset.', 200);


    }
}
