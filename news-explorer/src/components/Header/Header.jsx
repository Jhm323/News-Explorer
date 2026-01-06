import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = React.memo(
  ({ onLoginClick, onRegisterClick, isLoginModalOpen, isAnyModalOpen }) => {
    const { isLoggedIn, user, handleLogout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isOnSavedArticles = location.pathname === "/saved-news";

    // Add escape key listener
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === "Escape" && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen]);

    const handleMobileMenuClick = () => {
      if (!isAnyModalOpen) {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }
    };

    const handleLogoutClick = () => {
      handleLogout();
      setIsMobileMenuOpen(false);
    };

    const handleNavLinkClick = () => {
      setIsMobileMenuOpen(false);
    };

    const handleSignInClick = () => {
      onLoginClick();
      setIsMobileMenuOpen(false);
    };

    const handleSignUpClick = () => {
      onRegisterClick();
      setIsMobileMenuOpen(false);
    };

    return (
      <header
        className={`header ${isOnSavedArticles ? "header_white" : ""} ${
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
                <button
                  className="header__signin-button"
                  onClick={onLoginClick}
                >
                  Sign In
                </button>
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
            ></button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && !isAnyModalOpen && (
          <>
            <div
              className="mobile-menu-overlay"
              onClick={handleMobileMenuClick}
            ></div>

            <nav
              className="header__mobile-menu-content"
              data-menu-state={isLoggedIn ? "logged-in" : "not-logged-in"}
            >
              {isLoggedIn && user ? (
                <>
                  <Navigation
                    className="header__nav"
                    onNavClick={handleNavLinkClick}
                    data-testid="mobile-menu-logged-in"
                  />
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
                </>
              ) : (
                <>
                  <Navigation
                    className="header__nav"
                    onNavClick={handleNavLinkClick}
                    data-testid="mobile-menu-not-logged-in-nav"
                  />
                  <div
                    className="header__mobile-auth"
                    data-testid="mobile-menu-not-logged-in"
                  >
                    <button
                      className="header__mobile-signin-button"
                      onClick={handleSignInClick}
                    >
                      Sign In
                    </button>
                  </div>
                </>
              )}
            </nav>
          </>
        )}
      </header>
    );
  }
);

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
  isLoginModalOpen: PropTypes.bool,
  isAnyModalOpen: PropTypes.bool,
};

export default Header;
