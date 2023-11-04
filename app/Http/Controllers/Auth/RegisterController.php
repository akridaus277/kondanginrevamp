<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Validator;


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
        $user->sendEmailVerificationNotification();

        // $token = $user->createToken('MyApp')->accessToken;

        return response()->api("User berhasil didaftarkan.",200);
    }

    // Handle the email verification.
    public function verify(Request $request)
    {
        if (!$request->hasValidSignature()) {
            return redirect()->to('/offlinePage');
        }

        // Get the user associated with the verification link
        $user = \App\Models\User::find($request->route('id'));

        if (!$user) {
            // Handle the case where the user doesn't exist (e.g., show an error page)
            return redirect()->to('/offlinePage');
        }

        if ($user->hasVerifiedEmail()) {
            // Handle the case where the email has already been verified (e.g., show a message)
            return redirect()->to('/offlinePage');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect()->to('/')->with('verified', true);
    }


}

