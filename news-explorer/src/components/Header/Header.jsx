import "./Header.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLoginClick, onRegisterClick, onLogoutClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <p className="header__logo">NewsExplorer</p>
        <div className="header__right">
          <Navigation className="header__nav" />
          <div className="header__auth">
            {isLoggedIn ? (
              <button className="header__logout-button" onClick={onLogoutClick}>
                Logout
              </button>
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

        <button
          type="button"
          className="header__mobile-menu"
          aria-label="Sign in"
          onClick={onLoginClick}
        >
          <span className="header__mobile-menu-icon"></span>
        </button>
      </div>
    </header>
  );
}
export default Header;
