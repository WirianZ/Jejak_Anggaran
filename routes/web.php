<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'Jejak Anggaran',
        'tanggal' => now()->translatedFormat('d F Y'),
    ]);
});