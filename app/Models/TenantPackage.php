<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TenantPackage extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price'
    ];

    public function tenantThemes(): HasMany
    {
        return $this->hasMany(TenantTheme::class);
    }
    public function tenantType(): BelongsTo
    {
        return $this->belongsTo(TenantType::class);
    }
    public function setTenantType($tenantType)
    {
        $this->tenantType()->associate($tenantType);
    }

}
