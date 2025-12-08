import React from "react";
import gitHubIcon from "../../vendor/gitHub.svg";
import linkedInIcon from "../../vendor/linkedIn.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            © 2024 Supersite, Powered by News API
          </p>
          <div className="footer__nav-social">
            <nav className="footer__nav" aria-label="Footer navigation">
              <ul className="footer__links">
                <li className="footer__links-item">
                  <a href="/" className="footer__link">
                    Home
                  </a>
                </li>
                <li className="footer__links-item">
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
                <img
                  src={gitHubIcon}
                  alt="GitHub"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://linkedin.com"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src={linkedInIcon}
                  alt="LinkedIn"
                  className="footer__social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
