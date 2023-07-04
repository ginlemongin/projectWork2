<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sensore', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_di_sensore');
            $table->string('dati_di_consumo');
            $table->string('data_di_installazione');

            $table->unsignedBigInteger('edificio_id');
            $table->foreign('edificio_id')->references('id')->on('edificio');
            $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_sensore');
    }
};
