import { useState, useEffect } from "react";
import PropTypes from "prop-types"; //  for validation
import { AuthContext } from "./AuthContext";

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
    return new Promise((resolve) => {
      const newUser = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      resolve(); // Simulate success
    });
  };

  const handleLogin = (formData) => {
    return new Promise((resolve, reject) => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.email === formData.email &&
        savedUser.password === formData.password
      ) {
        setUser(savedUser);
        setIsLoggedIn(true);
        resolve(); // Simulate success
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("savedArticles");
    setUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
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

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthProvider.displayName = "AuthProvider";

export default AuthProvider;
