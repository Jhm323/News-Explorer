# News Explorer

![GitHub repo size](https://img.shields.io/github/repo-size/Jhm323/News-Explorer?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Jhm323/News-Explorer?style=flat-square)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

A full-stack news aggregation app where users can search for recent news articles, create an account, and save articles to a personal collection backed by a real database.

---

## Live Demo

- **Frontend:** [https://jhm323.github.io/News-Explorer](https://jhm323.github.io/News-Explorer)
- **Backend API:** [https://news-explorer-41n2.onrender.com](https://news-explorer-41n2.onrender.com)

---

## Monorepo Structure

```
News-Explorer/
├── news-explorer/        # React/Vite frontend
└── news-explorer-api/    # Express/MongoDB backend
```

---

## Stack

### Frontend

- React, Vite, React Router, Context API
- BEM CSS, Normalize.css
- NewsAPI.org integration

### Backend

- Node.js, Express
- MongoDB + Mongoose, MongoDB Atlas
- JWT authentication, bcryptjs
- Celebrate/Joi validation
- Helmet, express-rate-limit, Winston logging
- Deployed on Render

---

## Getting Started

### Clone

```bash
git clone https://github.com/Jhm323/News-Explorer.git
cd News-Explorer
```

### Frontend

```bash
cd news-explorer
npm install
cp .env.example .env   # add VITE_NEWS_API_KEY and VITE_API_URL
npm run dev
```

### Backend

```bash
cd news-explorer-api
npm install
cp .env.example .env   # add JWT_SECRET and DB_ADDRESS
npm run dev
```

---

## License

Educational project. No license specified.

---

Built with React • Node.js • MongoDB • Deployed on Render + GitHub Pages
