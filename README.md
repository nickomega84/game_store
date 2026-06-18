# 🛒 Games Catalog API & Store

A full-stack e-commerce application demonstrating a complete purchasing flow. Built to handle inventory management and dynamic shopping cart interactions.

## 🚀 Tech Stack
* **Frontend:** React 19, Vite, Tailwind CSS (Framer Motion for UI interactions)
* **Backend:** Ruby on Rails 8 API
* **Database:** PostgreSQL
* **Infrastructure:** Docker & Docker Compose

## ⚡ Core Features
* RESTful API backend for product catalog.
* Dynamic state management for shopping cart operations.
* Fully containerized development environment.

## 🛠️ Local Setup (Docker)

The entire API is containerized. You do not need to install Ruby or PostgreSQL on your local machine, only **Docker** and **Docker Compose**.

### 1. Spin up the containers
Clone the repository and start the Docker environment. This will automatically pull the necessary images and start the Puma server and PostgreSQL database.

```bash
git clone [https://github.com/nickomega84/game_store.git](https://github.com/nickomega84/game_store.git)
cd game_store
docker compose up --build
```

### 2. Database Initialization
Once the containers are running, open a **new terminal tab** and execute the following command to create the database and run the migrations inside the container:

```bash
docker compose exec backend bin/rails db:prepare
```

### 3. Verify the API
The backend server will be live and listening for requests at:
`http://localhost:3000`
