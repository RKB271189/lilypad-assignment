<?php

namespace App\Services\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class ServiceRepository implements ServiceInterface
{
    public function __construct(private Model $model) {}
    public function getCollection(int $limit = 0): Collection
    {
        if ($limit === 0) {
            return $this->model->get();
        } else {
            return $this->model->limit($limit)->get();
        }
    }
    public function getCollectionById(int $id): Model
    {
        return $this->model->find($id);
    }
    public function createCollection(array $params): Model
    {
        return $this->model->create($params);
    }
    public function updateCollection(array $params, int $id): Model
    {
        $collection = $this->model->findOrFail($id);
        return tap($collection)->update($params);
    }
    public function deleteCollection(int $id): int
    {
        $collection = $this->getCollectionById($id);
        return $collection->delete();
    }
}
