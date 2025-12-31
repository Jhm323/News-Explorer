import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider, AuthContext } from "../../context/AuthContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

// Error Boundary Class Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service (e.g., console or Sentry)
    console.error("Error Boundary Caught an Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
  const { isLoggedIn } = useContext(AuthContext);
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleCloseModal = () => setActiveModal("");

  const handleSwitchToRegister = () => setActiveModal("register");
  const handleSwitchToLogin = () => setActiveModal("login");

  return (
    <div className="page">
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        isAnyModalOpen={activeModal === "login" || activeModal === "register"}
        isLoggedIn={isLoggedIn}
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
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
