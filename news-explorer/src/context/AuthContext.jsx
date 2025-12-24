import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  // Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const saved = localStorage.getItem("savedArticles");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  const handleRegister = (formData) => {
    const newUser = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const handleLogin = (formData) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      setUser(savedUser);
      setIsLoggedIn(true);
      return true;
    }
    return false; // Login failed
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  const saveArticle = (article, keyword) => {
    const articleWithKeyword = { ...article, keyword: keyword };
    const updatedArticles = [...savedArticles, articleWithKeyword];
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  const deleteArticle = (articleId) => {
    const updatedArticles = savedArticles.filter(
      (article) => article._id !== articleId && article.url !== articleId
    );
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
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
