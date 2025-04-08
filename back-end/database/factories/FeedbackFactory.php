<?php

namespace Database\Factories;

use App\Models\Feedback;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    protected $model = Feedback::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'message' => $this->faker->paragraph(),
            'rating' => $this->faker->numberBetween(1, 5),
            'happiness' => $this->faker->randomElement(['🥲', '😐', '🙂', '😄', '🤩']),
        ];
    }
}
