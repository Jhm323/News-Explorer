import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navigation.css";

function Navigation({ className = "" }) {
  const { isLoggedIn } = useContext(AuthContext);

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
        {isLoggedIn && (
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
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
