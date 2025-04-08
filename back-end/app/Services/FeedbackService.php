<?php

namespace App\Services;

use App\Models\Feedback;
use App\Services\Contracts\ServiceRepository;
use Illuminate\Database\Eloquent\Collection;

final class FeedbackService extends ServiceRepository
{
    public function __construct(private Feedback $feedback)
    {
        parent::__construct($feedback);
    }
    public function getLatest($limit): Collection
    {
        return $this->feedback->latest()->take($limit)->get();
    }
    public function getLatestFilterByRating($limit, $rating)
    {
        return $this->feedback
            ->where('rating', $rating)
            ->latest()
            ->take($limit)
            ->get();
    }
}
