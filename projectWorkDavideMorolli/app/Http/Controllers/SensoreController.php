<?php

namespace App\Http\Controllers;
use App\Models\Sensore;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SensoreController extends Controller
{
    public function read(int $id)
    {
        $sensore = Sensore::where('id', $id)
            ->first();

            if($sensore != null){

        return response()->json($sensore);
    } else {

        return response()
        ->json(['errore' => "Sensore non presente"], 404);

    }
    }

    public function readAll()
    {

        $sensori = Sensore::all();

        return response()->json($sensori);
    }

    public function create(Request $request):void
    {

        $sensore = new Sensore;
        $sensore->tipo_di_sensore = $request->tipo_di_sensore;
        $sensore->dati_di_consumo = $request->dati_di_consumo;
        $sensore->data_di_installazione = $request->data_di_installazione;
        $sensore->save();

        return;
    }
}
