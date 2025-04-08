<?php

namespace App\Services;

use App\Models\Feedback;
use App\Services\Contracts\ServiceRepository;

final class FeedbackService extends ServiceRepository
{
    public function __construct(private Feedback $feedback)
    {
        parent::__construct($feedback);
    }
}
