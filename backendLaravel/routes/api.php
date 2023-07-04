<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SensoreController;
use App\Http\Controllers\EdificioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/edificioNuovo', [EdificioController::class, 'create']);

Route::get('/{id}/edificio', [EdificioController::class, 'read']);

Route::get('/edifici', [EdificioController::class, 'readAll']);

Route::post('/sensoreNuovo', [SensoreController::class, 'create']);

Route::get('/{id}/sensore', [SensoreController::class, 'read']);

Route::get('/sensori', [SensoreController::class, 'readAll']);
