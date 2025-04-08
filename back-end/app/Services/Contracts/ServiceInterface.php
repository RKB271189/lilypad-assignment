<?php

namespace App\Services\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface ServiceInterface
{
    public function getCollection(int $limit = 0): Collection;

    public function getCollectionById(int $id): Model;

    public function createCollection(array $params): Model;

    public function updateCollection(array $params, int $id): Model;

    public function deleteCollection(int $id): int;
}
