import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught an Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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

// Add PropTypes for ErrorBoundary
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const AppContent = React.memo(() => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [searchResults, setSearchResults] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState("");

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const handleCloseModal = () => setActiveModal("");
  const handleSwitchToRegister = () => setActiveModal("register");
  const handleSwitchToLogin = () => setActiveModal("login");

  return (
    <div className={`page ${isHomePage ? "page--home" : ""}`}>
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
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
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
        className="register-modal"
        containerClassName="register-modal__container"
      />
    </div>
  );
});

// PropTypes for AppContent
AppContent.propTypes = {};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <AppContent />
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
};

App.displayName = "App";

export default App;
