<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Edificio extends Model
{
    protected $table = 'edificio';

    public function sensore(): HasMany
    {
        return $this->hasMany(Sensore::class);
    }

    use HasFactory;
}
