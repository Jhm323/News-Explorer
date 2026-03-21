# News Explorer — Frontend

The React/Vite frontend for News Explorer. Connects to the News Explorer API for user authentication and article persistence.

---

## Live Demo

[https://jhm323.github.io/News-Explorer](https://jhm323.github.io/News-Explorer)

---

## Features

- Keyword search via NewsAPI (last 7 days)
- Responsive card grid with pagination (3 at a time)
- JWT-based user registration and login
- Save and delete articles (persisted to database)
- Saved Articles page with keyword summary
- Auth-aware UI — tooltips for unauthenticated users
- Animated preloader and error states
- Responsive across desktop, tablet, and mobile (320px+)

---

## Tech Stack

- React (functional components + hooks)
- Vite
- React Router
- Context API (`AuthContext`, `AuthProvider`)
- BEM CSS methodology
- NewsAPI.org / nomoreparties.co proxy

---

## Project Structure

```
src/
├── components/        # All UI components
│   ├── App/
│   ├── Header/
│   ├── Main/
│   ├── Footer/
│   ├── NewsCard/
│   ├── NewsCardsList/
│   ├── SavedNews/
│   ├── SearchForm/
│   ├── LoginModal/
│   ├── RegisterModal/
│   ├── ModalWithForm/
│   ├── SuccessModal/
│   ├── Preloader/
│   └── Navigation/
├── context/
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
├── utils/
│   ├── mainApi.js     # Backend API calls
│   ├── NewsApi.js     # NewsAPI calls
│   └── constants.js
└── main.jsx
```

---

## Environment Variables

Create a `.env` file in `news-explorer/`:

```env
VITE_NEWS_API_KEY=your_newsapi_key
VITE_API_URL=https://news-explorer-41n2.onrender.com
```

---

## Scripts

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Deployment

Deployed via GitHub Pages.

```bash
npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix news-explorer/dist origin gh-pages
```
