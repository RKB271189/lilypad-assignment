# Project Setup

This project involves both a backend API in Laravel and a frontend in React. The project is containerized using Docker. 
Follow these steps to set up and run the project.


## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/RKB271189/lilypad-assignment


### 2. Build the container
docker-compose build

### 3. Run the container

docker-compose up -d

### 4. Access laravel container
docker exec -it <laravel-container-name> bash

"Note: Replace <laravel-container-name> with the actual name of your Laravel container. You can find the container name by running: docker ps."

### 5. Run the migration and seeder to generate some fake data
php artisan migrate --seed


