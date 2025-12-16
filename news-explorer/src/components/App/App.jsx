import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  // Modal handlers
  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleCloseModal = () => setActiveModal("");
  const handleSwitchToRegister = () => setActiveModal("register");
  const handleSwitchToLogin = () => setActiveModal("login");

  return (
    <BrowserRouter>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          isLoginModalOpen={activeModal === "login"}
          isAnyModalOpen={activeModal === "login" || activeModal === "register"}
        />
        <main className="page__main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/saved-news"
              element={<SavedNews savedArticles={savedArticles} />}
            />
          </Routes>
        </main>
        <Footer />

        {/* Modals */}
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={handleCloseModal}
          onSwitchToRegister={handleSwitchToRegister}
          className="login-modal"
          containerClassName="login-modal__container"
        />

        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={handleCloseModal}
          onSwitchToLogin={handleSwitchToLogin}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
