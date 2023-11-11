<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TenantType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
    ];

    public function tenantPackages(): HasMany
    {
        return $this->hasMany(TenantPackage::class);
    }
}
