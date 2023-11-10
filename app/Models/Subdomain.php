<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Models\Domain as BaseSubdomain;
use Stancl\Tenancy\Database\Concerns\HasDatabase;

class Subdomain extends Model
{
    use HasFactory, HasDatabase;

}
