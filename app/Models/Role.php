<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function givePermissionTo($permissions)
    {
        foreach ($permissions as $permission) {
            $this->permissions()->attach($permission, ['created_at' => now(), 'updated_at' => now()]);
        }

    }

}
