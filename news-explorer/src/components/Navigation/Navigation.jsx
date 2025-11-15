import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>
      <ul className="navigation__links">
        <li>
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/saved-news" className="navigation__link">
            Saved articles
          </Link>
        </li>
        <li>
          <button className="navigation__button">Sign in</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
