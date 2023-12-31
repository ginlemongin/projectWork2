<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Sensore extends Model
{
    protected $table = 'sensore';
    
    public function edificio(): BelongsTo
    {
        return $this->belongsTo(Edificio::class);
    }

    use HasFactory;
}
