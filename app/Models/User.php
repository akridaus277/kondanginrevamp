<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'no_hp',
        'alamat',
        'kecamatan',
        'kota',
        'provinsi'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function emailVerification(): HasOne
     {
         return $this->hasOne(EmailVerification::class);
     }

     public function giveEmailVerificationTo($emailVerification)
    {
        $this->emailVerification()->save($emailVerification);
    }

    public function companies()
    {
        return $this->belongsToMany(Company::class);
    }

    public function setCompany($companies)
    {
        foreach ($companies as $company) {
            $this->companies()->attach($company, ['created_at' => now(), 'updated_at' => now()]);
        }
    }


}
