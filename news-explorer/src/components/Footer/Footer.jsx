import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Supersite, Powered by News API
        </p>

        <nav className="footer__navigation">
          <ul className="footer__links">
            <li className="footer__link-item">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__link-item">
              <a
                href="https://tripleten.com"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                TripleTen
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="footer__social-icon footer__social-icon_type_github"></div>
          </a>
          <a
            href="https://facebook.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <div className="footer__social-icon footer__social-icon_type_facebook"></div>
          </a>
        </div>
      </div>
    </footer>
  );
}
