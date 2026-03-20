const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const request = (endpoint, options) =>
  fetch(`${BASE_URL}${endpoint}`, options).then((res) => {
    if (res.ok) return res.json();
    return res.json().then((err) => Promise.reject(err));
  });

export const register = (email, password, name) =>
  request("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });

export const login = (email, password) =>
  request("/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

export const getUserInfo = (token) =>
  request("/api/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getSavedArticles = (token) =>
  request("/api/articles", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const saveArticle = (token, article) =>
  request("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  });

export const deleteArticle = (token, articleId) =>
  request(`/api/articles/${articleId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
