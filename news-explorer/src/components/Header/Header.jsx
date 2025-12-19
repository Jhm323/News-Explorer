import react, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  onLoginClick,
  onRegisterClick,
  isLoginModalOpen,
  isAnyModalOpen,
}) {
  const { isLoggedIn, user, handleLogout } = useContext(AuthContext);

  return (
    <header className="header">
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
        {!isAnyModalOpen && (
          <button
            type="button"
            className="header__mobile-menu"
            aria-label="Sign in"
            onClick={onLoginClick}
          >
            <span className="header__mobile-menu-icon"></span>
          </button>
        )}
      </div>
    </header>
  );
}
export default Header;
