<?php
namespace App\Http\Controllers;

use App\Models\Edificio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EdificioController extends Controller
{
    public function read(int $id)
    {

        $edificio = Edificio::with('sensore')
            ->findOrFail($id);

        if($edificio != null){

        return response()->json($edificio);

        } else {

            return response()
            ->json(['errore' => "Edificio non presente"], 404);

        }
    }

    public function readAll()
    {

        $edifici = Edificio::with('sensore')->get();

        return response()->json($edifici);
    }

    public function create(Request $request):void
    {

        $edificio = new Edificio;
        $edificio->indirizzo = $request->indirizzo;
        $edificio->dimensioni = $request->dimensioni;
        $edificio->anno_di_costruzione = $request->anno_di_costruzione;
        $edificio->save();

        return;
    }
}
