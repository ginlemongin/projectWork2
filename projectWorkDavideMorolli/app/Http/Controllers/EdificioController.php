<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EdificioController extends Controller
{
    public function read(int $id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }

    public function readAll(int $id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
