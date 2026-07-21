# 📝 Todo Backend API

A RESTful backend API for managing Todos, built with **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, and **PostgreSQL**.

This project was created to practice backend development using **Domain-Driven Design (DDD)** and the **Repository Pattern**, promoting a clean separation between business logic, infrastructure, and presentation layers.
---

## 🏛️ Architecture

The project follows **Domain-Driven Design (DDD)** together with the **Repository Pattern**.

### Layers

- **Presentation**
  - Handles HTTP requests and responses.
  - Defines routes and controllers.

- **Domain**
  - Contains entities, DTOs, repository contracts, and application use cases.
  - Completely independent of Express, Prisma, or PostgreSQL.

- **Infrastructure**
  - Implements repositories and data sources.
  - Handles communication with the database through Prisma.

---

## 📋 Todo Entity

Each Todo contains:

| Property | Type | Description |
|----------|------|-------------|
| `id` | number | Unique identifier |
| `text` | string | Todo description |
| `category` | string[] | List of categories |
| `createdAt` | Date | Creation timestamp |
| `completedAt` | Date \| null | Completion timestamp |

The entity also exposes the computed property:

- `isCompleted`

and validates incoming data before creating a Todo instance. :contentReference[oaicite:0]{index=0}

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all Todos |
| GET | `/:id` | Get Todo by ID |
| POST | `/` | Create Todo |
| PUT | `/:id` | Update Todo |
| DELETE | `/:id` | Delete Todo |

The routes are connected to a dedicated controller responsible for invoking the appropriate application use cases. :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}

---

## 🧩 Repository Pattern

Business logic communicates only with the `TodoRepository` abstraction.

The repository defines the following operations:

- Create
- Get All
- Get By ID
- Update
- Delete

This allows different persistence implementations (PostgreSQL, MongoDB, in-memory, etc.) without changing the application's business logic. 

---

## 🗄️ Database

The project uses:

- PostgreSQL
- Prisma ORM
- Prisma PostgreSQL Adapter

Database access is isolated inside the infrastructure layer, keeping the domain independent of the persistence technology.

---

## 📦 Installation

```bash
git clone <repository-url>

cd todo-backend

npm install
```

Change name of `.env.template` to `.env` and then replace the file variables with yours.

Run the project:

```bash
npm run dev
```
