# Express Product API with Caching

A simple Express.js application implementing product CRUD operations with in-memory caching, TTL, and cache invalidation.

## Project Structure

```text

├── server.js
├── db.json
├── routes/
│   └── productRoutes.js
├── controllers/
│   └── productController.js
├── services/
│   └── productService.js
├── database/
│   └── database.js
└── middleware/
    └── cacheMiddleware.js

```

## Features

* CRUD operations for products
* Caching for GET requests
* Cache HIT/MISS headers (`X-Cache`)
* 1-minute cache TTL
* Automatic cache invalidation after successful data modifications

## API Endpoints

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/products`     | Get all products           |
| GET    | `/products/:id` | Get product by ID          |
| POST   | `/products`     | Create a product           |
| PUT    | `/products/:id` | Update a product           |
| PATCH  | `/products/:id` | Partially update a product |
| DELETE | `/products/:id` | Delete a product           |

## Caching

* **HIT:** Returns valid cached data.
* **MISS:** Fetches fresh data and caches it.
* **TTL:** Cached entries expire after 1 minute.
* **Invalidation:** Successful POST, PUT, PATCH, and DELETE requests clear the cache.

## Installation & Setup

```bash
npm install express
node server.js
```

The server runs at `http://localhost:3000`.

## Tech Stack

* Node.js
* Express.js
* JavaScript
* JSON file storage (`db.json`)
