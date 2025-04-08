<?php

namespace App\Http\Controllers;

use App\Services\FeedbackService;
use Exception;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function __construct(private FeedbackService $feedbackService) {}
    public function index()
    {
        try {           
            $feedback = $this->feedbackService->getCollection();
            return response()->json(['feedback' => $feedback], 200);
        } catch (Exception $ex) {
            logger('Error fetching feedback', [$ex->getMessage()]);
            return response()->json(['error' => 'Something went wrong.'], 500);
        }
    }
}
