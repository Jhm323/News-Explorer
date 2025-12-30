const API_KEY = "2f540b608a08465397414bb521b65a22";
const BASE_URL = "https://newsapi.org/v2";

class NewsApi {
  constructor() {
    this._baseUrl = BASE_URL;
    this._apiKey = API_KEY;
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
    return fetch(
      `${this._baseUrl}/everything?q=${query}&apiKey=${this._apiKey}&pageSize=100&sortBy=publishedAt`
    ).then(this._checkResponse);
  }
}

const newsApi = new NewsApi();
export default newsApi;
