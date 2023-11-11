<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TenantTheme extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'cover'
    ];

    public function tenantPackage(): BelongsTo
    {
        return $this->belongsTo(TenantPackage::class);
    }
    public function setTenantPackage($tenantPackage)
    {
        $this->tenantPackage()->associate($tenantPackage);
    }
}
