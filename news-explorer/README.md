# News Explorer

A React-based web application that lets users search for recent news articles via **NewsAPI**, view results in a clean, card-based layout, and save articles for later. This project is part of **TripleTen — Sprint 16 (Final Project)** and focuses on frontend architecture, API integration, routing, and responsive UI.

---

## Features

- **Keyword Search** — Search news articles from the last 7 days
- **Article Grid** — Responsive card layout with images, metadata, and links
- **Pagination** — Load results incrementally with _Show more / Show less_
- **Save Articles (Stage 1 simulation)** — Save behavior mocked with `localStorage`
- **Auth Tooltips** — Prompts unauthenticated users to sign in
- **Preloader** — Animated loader during API requests
- **Error Handling** — Friendly messages for empty results, API errors, and invalid searches
- **Responsive Design** — Optimized for desktop, tablet, and mobile (320px+)
- **Deployment Ready** — Hosted via GitHub Pages

---

## 🛠 Tech Stack

**Frontend**

- React (functional components)
- Vite
- JSX
- CSS (BEM methodology)

**State & Routing**

- React Hooks (`useState`, `useContext`)
- React Router

**API**

- [NewsAPI.org](https://newsapi.org)
- Production proxy: `nomoreparties.co`

**Styling & Assets**

- Normalize.css
- Fonts: Roboto, Roboto Slab, Inter

**Deployment**

- GitHub Pages

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Jhm323/News-Explorer.git
cd News-Explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
VITE_NEWS_API_KEY=api_key
```

> Get a free API key from [NewsAPI.org](https://newsapi.org).

### 4. Run locally

```bash
npm run dev
```

Open: **[http://localhost:5173](http://localhost:5173)**

### 5. Production build

```bash
npm run build
npm run preview
```

---

## Usage

### Search for News

1. Enter a keyword (e.g., `technology`, `climate`, `sports`)
2. Click **Search**
3. Results appear as cards with:

   - Title
   - Description
   - Publication date
   - Source & image

### View & Save Articles

- Click **Show more** to load additional articles (3 at a time)
- Hover over the save icon:

  - If logged out → tooltip: _“Sign in to save articles”_

- Saved articles are stored in `localStorage` (Stage 1 only)

### Navigation

- **Home** → `/`
- **Saved News** → `/saved-news` (simulated)
- External article links open in new tabs

---

## API Details

**Endpoint**

- Development: `https://newsapi.org/v2/everything`
- Production: `https://nomoreparties.co/news/v2/everything`

**Parameters**

- `q` — search query
- `apiKey` — your API key
- `from` / `to` — date range (last 7 days)
- `pageSize` — `100` (max free tier)

**Response Fields Used**

- `source.name`
- `title`
- `description`
- `publishedAt`
- `urlToImage`

**Error States**

- No results found
- API/network error
- Invalid or empty query

---

## Project Structure

```
src/
├── components/        # React components
├── utils/             # API & helper functions
├── assets/            # Images & static assets
├── vendor/            # Fonts & third-party files
├── blocks/            # BEM-based CSS (optional structure)
├── App.jsx            # Root component
└── main.jsx           # Vite entry point
```

---

## Sprint 16 — Project Requirements (Stage 1)

**Infrastructure**

- Vite-based React setup
- Functional components only
- Proper file organization

**Core Components**

- App
- Header / Navigation
- SearchForm
- Main
- NewsCard
- Preloader
- Footer
- ModalWithForm
- LoginModal / RegisterModal

**Routing**

- `/` — Main page
- `/saved-news` — Saved articles page

**Modal Behavior**

- Open on button click
- Close via:

  - Close icon
  - Overlay click
  - `Escape` key

**Preloader**

- Circular animation
- Text: _“Searching for news…”_

---

## Deployment

Live Demo:
**[https://github.com/Jhm323/News-Explorer](https://github.com/Jhm323/News-Explorer)**

### Deploy to GitHub Pages

```bash
npm run build
```

- Push to GitHub
- Enable **Pages** in repo settings
- Select `gh-pages` branch or root directory

---

## Contributing & Submission

This is a **TripleTen educational project**.

Guidelines:

- Work in the `stage-1-frontend-and-api` branch
- Submit a Pull Request to `main`
- Ensure all rubric criteria are met:

  - Responsive layout
  - Semantic HTML
  - BEM class naming

---

## License

This project is for educational purposes as part of the **TripleTen curriculum**. No license specified.

---

> Built with React • Styled with BEM • Powered by NewsAPI
