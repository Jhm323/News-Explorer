import {
  API_BASE_URL_DEV,
  API_BASE_URL_PROD,
  WEEK_IN_MS,
} from "./constants.js";

const BASE_URL =
  import.meta.env.MODE === "production" ? API_BASE_URL_PROD : API_BASE_URL_DEV;
class NewsApi {
  constructor() {
    this._baseUrl =
      import.meta.env.MODE === "production"
        ? API_BASE_URL_PROD
        : API_BASE_URL_DEV;
    this._apiKey = import.meta.env.VITE_NEWS_API_KEY;
    // Calculate dates using constant
    this._today = new Date();
    this._weekAgo = new Date(this._today.getTime() - WEEK_IN_MS);
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
      `${this._baseUrl}?q=${encodeURIComponent(query)}&apiKey=${
        this._apiKey
      }&from=${fromDate}&to=${toDate}&pageSize=100&sortBy=publishedAt`
    ).then(this._checkResponse);
  }
}

const newsApi = new NewsApi();
export default newsApi;
