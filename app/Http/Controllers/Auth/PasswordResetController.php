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
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Silahkan masukkan alamat email yang valid.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        // Check if the user is registered in your database
        $existingUser = User::where('email', $request->email)->first();
        if (!$existingUser) {
            // If the user is not registered, you can register them here
            return response()->apiError("User tidak ditemukan", 404);
        }


            $status = Password::sendResetLink(
                $request->only('email')
            );

            return $status === Password::RESET_LINK_SENT
                ? response()->api('Link pengaturan ulang kata sandi berhasil terkirim ke email anda.', 200)
                : response()->apiError('Gagal mengirim link pengaturan ulang kata sandi.', 500);


    }

    public function reset(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ], [
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Silahkan masukkan alamat email yang valid.',
            'token.required' => 'Token wajib diisi.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password harus terdiri dari setidaknya 6 karakter.',
            'password.confirmed' => 'Konfirmasi Password tidak cocok.'
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        // Check if the user is registered in your database
        $existingUser = User::where('email', $request->email)->first();
        if (!$existingUser) {
            // If the user is not registered, you can register them here
            return response()->apiError("User tidak ditemukan", 404);
        }
        // Retrieve the token record
        $tokenRecord = DB::table('password_resets')
        ->where('email', $request->email)
        ->first();

        // Check if the token record exists and if it's expired
        if (!$tokenRecord || !Password::broker()->tokenExists($existingUser, $request->token) || Carbon::parse($tokenRecord->created_at)->addMinutes(config('auth.passwords.users.expire')) < Carbon::now()) {
            return response()->apiError("Token reset password tidak valid atau sudah kedaluwarsa.", 400);
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
            ? response()->api('Password berhasil diatur ulang.', 200)
            : response()->api('Gagal mengatur ulang password.', 400);
    }
}
