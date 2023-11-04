<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DTO\UserInfoDTO;

class UserController extends Controller
{
    public function userInfo(Request $request)
    {
        $user = $request->user();
        $userDTO = new UserInfoDTO($user);

        return response()->api($userDTO,200);
    }
    //
}
