import "./Header.css";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <p className="header__logo">NewsExplorer</p>
        <div className="header__right">
          <nav className="header__nav">
            <a href="#" className="header__nav-link" id="">
              Home
            </a>
          </nav>
          <button className="header__signin-btn">Signin</button>
        </div>

        <button
          className="header__mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__mobile-menu-icon">=</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="header__side-menu">
          <a href="#" className="header__side-menu-link">
            Home
          </a>
          <button className="header__side-menu-signin">Signin</button>
        </nav>
      )}
    </header>
  );
}
export default Header;
