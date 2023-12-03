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
use App\Models\DomainAccessConfiguration;
use App\Models\DomainFeature;
use App\Models\DomainFeaturePermission;
use App\Models\DomainPermission;
use App\Models\DomainRole;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'phone' => 'required|string|min:9|unique:users',
            'address' => 'required|string|min:6',
            'district' => 'required|string',
            'city' => 'required|string',
            'province' => 'required|string',
        ], [
            'name.required' => 'Name is required.',
            'name.max' => 'Name must not be greater than 255 characters.',
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.max' => 'Email must not be greater than 255 characters.',
            'email.unique' => 'Email is already registered.',
            'password.required' => 'Password is required.',
            'password.min' => 'Password must be at least 6 characters long.',
            'phone.required' => 'Phone number is required.',
            'phone.min' => 'Phone number must be at least 9 characters long.',
            'phone.unique' => 'Phone number is already registered.',
            'address.required' => 'Address is required.',
            'address.min' => 'Address must be at least 6 characters long.',
            'district.required' => 'District is required.',
            'city.required' => 'City is required.',
            'province.required' => 'Province is required.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'address' => $request->address,
            'district' => $request->district,
            'city' => $request->city,
            'province' => $request->province,
        ]);

        $retailerRole = DomainRole::where('name', 'retailer')->first();
        $domainPermissions = DomainPermission::all();
        $userShoppingFeature = DomainFeature::where('name', 'user_shopping')->first();
        $userDashboardFeature = DomainFeature::where('name', 'user_dashboard')->first();

        $domainFeaturePermissions = DomainFeaturePermission::whereIn('domain_permission_id', $domainPermissions->pluck('id'))
        ->where(function ($query) use ($userShoppingFeature, $userDashboardFeature) {
            $query->where('domain_feature_id', $userShoppingFeature->id)
                ->orWhere('domain_feature_id', $userDashboardFeature->id);
        })
        ->get();

        foreach ($domainFeaturePermissions as $domainFeaturePermission) {
            $domainFeaturePermission = DomainAccessConfiguration::create(
                [
                    'user_id' => $user->id,
                    'domain_role_id' => $retailerRole->id,
                    'domain_feature_permission_id' => $domainFeaturePermission->id
                ]
            );
        }

        // $user->sendEmailVerificationNotification();
        $emailVerification = new EmailVerification(['token' => Str::random(64)]);
        $user->emailVerification()->save($emailVerification);
        Mail::to($user->email)->send(new EmailVerificationMail($user->name,$emailVerification->token,$user->id));


        // $token = $user->createToken('MyApp')->accessToken;

        return response()->api("User registered successfully.",200);
    }

    // Handle the email verification.
    public function verify($id, $token)
    {
        $user = User::where(['id' => $id])->first();
        if (!$user) {
            /* return redirect()->to('/verifEmailFailed'); */
            return response()->apiError("User not found", 404);
        }

        $emailVerification = EmailVerification::where(['user_id' => $id, 'token' => $token])->first();
        if (!$emailVerification) {
            // return redirect()->to('/verifEmailFailed');
            return response()->apiError("Token is not valid", 403);
        }

        $user->email_verified_at = now();
        $user->save();
        $emailVerification->delete();
        // return redirect()->to('/verifEmailSuccess');
        return response()->api('Your email has been successfully verified',200);

    }

    public function verifyWait(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.max' => 'Email must not be greater than 255 characters.',
        ]);

        if ($validator->fails()) {
            return response()->apiError($validator->errors(), 400);
        }
        $user = User::where(['email' => $request->email])->first();
        if (!$user) {
            return response()->apiError("User not found",404);
        }
        if (!$user->hasVerifiedEmail()) {
            return response()->apiError("Your account has not been verified", 403);
        }

        return response()->api("Your account has been successfully verified", 200);

    }


}

