# News Explorer — Backend API

The Express/MongoDB REST API for News Explorer. Handles user authentication and saved article persistence.

---

## Live API

[https://news-explorer-41n2.onrender.com](https://news-explorer-41n2.onrender.com)

---

## Endpoints

### Public

| Method | Route     | Description           |
| ------ | --------- | --------------------- |
| POST   | `/signup` | Register a new user   |
| POST   | `/signin` | Login and receive JWT |

### Protected (requires `Authorization: Bearer <token>`)

| Method | Route                      | Description               |
| ------ | -------------------------- | ------------------------- |
| GET    | `/api/users/me`            | Get current user info     |
| GET    | `/api/articles`            | Get user's saved articles |
| POST   | `/api/articles`            | Save an article           |
| DELETE | `/api/articles/:articleId` | Delete a saved article    |

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- MongoDB Atlas (cloud database)
- JWT (jsonwebtoken) + bcryptjs
- Celebrate + Joi (request validation)
- Helmet (security headers)
- express-rate-limit
- Winston + express-winston (logging)
- Deployed on Render

---

## Project Structure

```
news-explorer-api/
├── app.js
├── config/index.js          # DB address + JWT secret defaults
├── constants/index.js       # Error/response messages
├── controllers/
│   ├── users.js
│   └── articles.js
├── errors/
│   ├── index.js
│   └── classes/             # Custom error classes
│       ├── BadRequestError.js
│       ├── UnauthorizedError.js
│       ├── ForbiddenError.js
│       ├── NotFoundError.js
│       └── ConflictError.js
├── middlewares/
│   ├── auth.js              # JWT verification
│   ├── errorHandler.js      # Centralized error handler
│   └── rateLimiter.js
├── models/
│   ├── user.js
│   └── article.js
├── routes/
│   ├── index.js
│   ├── users.js
│   └── articles.js
└── utils/
    └── validation.js        # Celebrate/Joi schemas
```

---

## Environment Variables

Create a `.env` file in `news-explorer-api/`:

```env
JWT_SECRET=your_jwt_secret
DB_ADDRESS=mongodb+srv://username:password@cluster.mongodb.net/news-explorer
```

---

## Scripts

```bash
npm run dev     # Start with nodemon (hot reload) on port 3000
npm start       # Start with node on port 3000
```

---

## Deployment

Deployed on Render as a Web Service.

- **Build command:** `npm install`
- **Start command:** `npm start`
- **Root directory:** `news-explorer-api`
