<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\EmailVerification;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailVerificationMail;


class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'no_hp'=> 'required|string|min:9|unique:users',
            'alamat' => 'required|string|min:6',
            'kecamatan' => 'required|string',
            'kota' => 'required|string',
            'provinsi' => 'required|string',

        ], [
            'name.required' => 'Nama wajib diisi.',
            'name.max' => 'Nama tidak boleh lebih dari 255 karakter.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Silahkan masukkan alamat email yang valid.',
            'email.max' => 'Email tidak boleh lebih dari 255 karakter.',
            'email.unique' => 'Email sudah terdaftar.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Panjang password minimal 6 karakter.',
            'no_hp.required' => 'Nama wajib diisi.',
            'no_hp.min' => 'Panjang Nomor HP minimal 9 karakter.',
            'no_hp.unique' => 'Nomor HP sudah terdaftar.',
            'alamat.required' => 'Alamat wajib diisi.',
            'alamat.min' => 'Panjang Alamat minimal 6 karakter.',
            'kecamatan.required' => 'Kecamatan wajib diisi.',
            'kota.required' => 'Kota wajib diisi.',
            'provinsi.required' => 'Provinsi wajib diisi.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
            'kecamatan' => $request->kecamatan,
            'kota' => $request->kota,
            'provinsi' => $request->provinsi,
        ]);
        // $user->sendEmailVerificationNotification();
        $emailVerification = new EmailVerification(['token' => Str::random(64)]);
        $user->emailVerification()->save($emailVerification);
        Mail::to($user->email)->send(new EmailVerificationMail($user->name,$emailVerification->token,$user->id));


        // $token = $user->createToken('MyApp')->accessToken;

        return response()->api("User berhasil didaftarkan.",200);
    }

    // Handle the email verification.
    public function verify($id, $token)
    {
        $emailVerification = EmailVerification::where(['user_id' => $id, 'token' => $token])->first();
        if (!$emailVerification) {
            return redirect()->to('/koneksiTerputus');
        }
        $user = User::where(['id' => $id])->first();
        if (!$user) {
            return redirect()->to('/koneksiTerputus');
        }
        $user->email_verified_at = now();
        $user->save();
        $emailVerification->delete();
        return redirect()->to('/login');

    }


}

