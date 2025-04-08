<?php

use App\Http\Controllers\FeedbackController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->middleware('api')->group(function () {
    Route::get('feedback', [FeedbackController::class, 'index']);
    Route::post('feedback', [FeedbackController::class, 'store']);
});
