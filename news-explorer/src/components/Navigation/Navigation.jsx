import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ className = "" }) {
  return (
    <nav className={`navigation ${className}`.trim()}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item navigation__item_saved">
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Saved articles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
