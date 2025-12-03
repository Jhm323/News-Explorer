import "./Header.css";

function Header() {
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
      </div>
    </header>
  );
}
export default Header;
