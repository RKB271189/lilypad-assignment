<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackRequest;
use App\Services\FeedbackService;
use Exception;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function __construct(private FeedbackService $feedbackService) {}
    public function index(Request $request)
    {
        try {
            if ($request->has('rating')) {
                $feedback = $this->feedbackService->getLatestFilterByRating(10, $request->rating);
            } else {
                $feedback = $this->feedbackService->getLatest(10);
            }
            return response()->json(['feedback' => $feedback], 200);
        } catch (Exception $ex) {
            logger('Error fetching feedback', [$ex->getMessage()]);
            return response()->json(['error' => 'Something went wrong.'], 500);
        }
    }
    public function store(FeedbackRequest $request)
    {
        try {
            $params = $request->only('name', 'message', 'rating');
            $create = $this->feedbackService->createCollection($params);
            if ($create) {
                return response()->json(['message' => 'Feedback submitted successfully.'], 200);
            }
            throw new Exception("Unable to store feedback");
        } catch (Exception $ex) {
            logger('Error storing feedback', [$ex->getMessage()]);
            return response()->json(['error' => 'Something went wrong.'], 500);
        }
    }
}
