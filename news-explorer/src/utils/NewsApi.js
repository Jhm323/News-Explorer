const BASE_URL = import.meta.env.MODE === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

class NewsApi {
  constructor() {
    this._baseUrl = BASE_URL;
    this._apiKey = import.meta.env.VITE_NEWS_API_KEY;  // Updated for Vite
    // Calculate dates
    this._today = new Date();
    this._weekAgo = new Date(this._today.getTime() - 7 * 24 * 60 * 60 * 1000);
  }

  // Check response and handle errors
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Main search method
  searchNews(query) {
    if (!query.trim()) {
      return Promise.reject("Please enter a keyword");
    }
    const fromDate = this._weekAgo.toISOString().split("T")[0];
    const toDate = this._today.toISOString().split("T")[0];
    return fetch(
      `${this._baseUrl}?q=${encodeURIComponent(query)}&apiKey=${this._apiKey}&from=${fromDate}&to=${toDate}&pageSize=100&sortBy=publishedAt`
    ).then(this._checkResponse);
  }
}

const newsApi = new NewsApi();
export default newsApi;
