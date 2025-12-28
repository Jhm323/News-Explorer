import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import closeIcon from "../../vendor/close-icon.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  onLoginClick,
  onRegisterClick,
  isLoginModalOpen,
  isAnyModalOpen,
}) {
  const { isLoggedIn, user, handleLogout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`header ${isLoggedIn ? "header_white" : ""} ${
        isAnyModalOpen ? "header_modal-open" : ""
      } ${isMobileMenuOpen ? "header_menu-open" : ""}`}
    >
      <div className="header__content">
        <p className="header__logo">NewsExplorer</p>
        <div className="header__right">
          <Navigation className="header__nav" />
          <div className="header__auth">
            {isLoggedIn && user ? (
              <div className="header__user-section">
                <span className="header__username">{user.name}</span>
                <button
                  className="header__logout-button"
                  onClick={handleLogout}
                  aria-label="Log out"
                >
                  <span className="header__logout-icon"></span>
                </button>
              </div>
            ) : (
              <>
                <button
                  className="header__signin-button"
                  onClick={onLoginClick}
                >
                  Sign In
                </button>
                <button
                  className="header__signup-button"
                  onClick={onRegisterClick}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
        {!isMobileMenuOpen && !isAnyModalOpen && (
          <button
            type="button"
            className="header__mobile-menu"
            aria-label="Menu"
            onClick={handleMobileMenuClick}
          >
            <span className="header__mobile-menu-icon"></span>
          </button>
        )}
        {isMobileMenuOpen && !isAnyModalOpen && (
          <button
            type="button"
            className="header__mobile-menu_close"
            aria-label="Close menu"
            onClick={handleMobileMenuClick}
            style={{ backgroundImage: `url(${closeIcon})` }}
          ></button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && !isAnyModalOpen && (
        <nav className="header__mobile-menu-content">
          <Navigation
            className="header__nav"
            onNavClick={handleMobileMenuClick}
          />
          {isLoggedIn && user ? (
            <div className="header__mobile-user-section">
              <span className="header__mobile-username">{user.name}</span>
              <button
                className="header__mobile-logout-button"
                onClick={handleLogoutClick}
              >
                <span className="header__mobile-logout-icon"></span>
                Logout
              </button>
            </div>
          ) : (
            <div className="header__mobile-auth">
              <button
                className="header__mobile-signin-button"
                onClick={() => {
                  onLoginClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign In
              </button>
              <button
                className="header__mobile-signup-button"
                onClick={() => {
                  onRegisterClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
