import React, { useContext } from "react";
import PropTypes from "prop-types"; // for validation
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navigation.css";

const Navigation = React.memo(({ className = "", onNavClick }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className={`navigation ${className}`.trim()}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            onClick={onNavClick}
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
              onClick={onNavClick}
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
});

Navigation.propTypes = {
  className: PropTypes.string,
  onNavClick: PropTypes.func,
};

Navigation.displayName = "Navigation";

export default Navigation;
