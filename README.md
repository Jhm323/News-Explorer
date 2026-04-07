# News Explorer

![GitHub repo size](https://img.shields.io/github/repo-size/Jhm323/News-Explorer?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Jhm323/News-Explorer?style=flat-square)

News Explorer is a full-stack app that lets users search for recent news articles, create an account, and save articles to a personal collection.

I built this to go beyond a simple API demo and handle real user flows—things like authentication, persistence, and making sure the UI doesn’t fall apart when the API is slow or returns unexpected data.

---

## Live Demo

- Frontend: https://jhm323.github.io/News-Explorer  
- Backend API: https://news-explorer-41n2.onrender.com  

---

## How it works

- Users can search for articles using a third-party news API  
- Articles can be saved to a personal account (stored in MongoDB)  
- Authentication is handled with JWT so users stay logged in across sessions  
- The UI handles loading states and errors so the experience stays usable even when the API isn’t perfect  

---

## Stack

### Frontend
- React (Vite)
- React Router
- Context API for global state
- BEM CSS

### Backend
- Node.js + Express
- MongoDB (Mongoose, Atlas)
- JWT authentication + bcrypt
- Request validation with Celebrate/Joi
- Basic security + rate limiting (Helmet, express-rate-limit)

---

## Project structure


News-Explorer/
├── news-explorer/ # React frontend
└── news-explorer-api/ # Express backend


---

## Local setup

Clone the repo:

```bash
git clone https://github.com/Jhm323/News-Explorer.git
cd News-Explorer
Frontend
cd news-explorer
npm install
cp .env.example .env
# add VITE_NEWS_API_KEY and VITE_API_URL
npm run dev
Backend
cd news-explorer-api
npm install
cp .env.example .env
# add JWT_SECRET and DB_ADDRESS
npm run dev
