import "./Header.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <p className="header__logo">NewsExplorer</p>
        <div className="header__right">
          <Navigation className="header__nav" />
          <button type="button" className="header__signin-btn">
            Signin
          </button>
        </div>

        <button
          type="button"
          className="header__mobile-menu"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="header-side-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__mobile-menu-icon">=</span>
        </button>
      </div>

      {menuOpen && (
        <nav id="header-side-menu" className="header__side-menu">
          <Navigation className="header__side-menu__nav" />
          <button type="button" className="header__side-menu-signin">
            Signin
          </button>
        </nav>
      )}
    </header>
  );
}
export default Header;
