import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import {
  register,
  login,
  getUserInfo,
  getSavedArticles,
  saveArticle as apiSaveArticle,
  deleteArticle as apiDeleteArticle,
} from "../utils/mainApi";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  // Check localStorage for token on mount and validate with server
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    getUserInfo(token)
      .then((userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        return getSavedArticles(token);
      })
      .then((articles) => setSavedArticles(articles))
      .catch(() => {
        localStorage.removeItem("token");
      });
  }, []);

  const handleRegister = (formData) => {
    return register(formData.email, formData.password, formData.name);
  };

  const handleLogin = (formData) => {
    return login(formData.email, formData.password)
      .then(({ token }) => {
        localStorage.setItem("token", token);
        return getUserInfo(token);
      })
      .then((userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        return getSavedArticles(localStorage.getItem("token"));
      })
      .then((articles) => setSavedArticles(articles));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
  };

  const saveArticle = (article, keyword) => {
    const token = localStorage.getItem("token");
    return apiSaveArticle(token, {
      keyword,
      title: article.title,
      text: article.description || "No description available",
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image:
        article.urlToImage ||
        article.image ||
        "https://via.placeholder.com/300",
    }).then((savedArticle) => {
      setSavedArticles((prev) => [...prev, savedArticle]);
    });
  };

  const deleteArticle = (articleId) => {
    const token = localStorage.getItem("token");
    return apiDeleteArticle(token, articleId).then(() => {
      setSavedArticles((prev) =>
        prev.filter((article) => article._id !== articleId),
      );
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        handleRegister,
        handleLogin,
        handleLogout,
        savedArticles,
        saveArticle,
        deleteArticle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthProvider.displayName = "AuthProvider";

export default AuthProvider;
