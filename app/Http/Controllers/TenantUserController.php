<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DTO\TenantUserInfoDTO;

class TenantUserController extends Controller
{
    public function tenantUserInfo($tenant, Request $request)
    {
        $user = $request->user();
        $tenantUserDTO = new TenantUserInfoDTO($tenant, $user);

        // $userDTO = $user->domainRoles;

        return response()->api($tenantUserDTO,200);
        // return response()->api("Yuhuu",200);
    }
    //
}
