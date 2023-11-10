<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DomainFeaturePermission extends Model
{
    use HasFactory;

    public function domainFeature()
    {
        return $this->belongsTo(DomainFeature::class,'domain_feature_id','id');
    }
    public function domainPermission()
    {
        return $this->belongsTo(DomainPermission::class,'domain_permission_id','id');
    }
    public function setDomainFeature($domainFeature)
    {
        $this->domainFeature()->associate($domainFeature);
        // $this->save();
    }
    public function setDomainPermission($domainPermission)
    {
        $this->domainPermission()->associate($domainPermission);
        // $this->save();
    }

}
