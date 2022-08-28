import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-flexed">
        <div className="header logo-container">
          <img
            src="../../../assets/img/glow-logo.jpg"
            alt="logo"
            className="logo-img"
          />
        </div>
        <div className="header-links">
          <a href="/#" className="header-link">
            Products
          </a>
          <a href="/#" className="header-link">
            About
          </a>
          <a href="/#" className="header-link">
            Blogs
          </a>
          <a href="/#" className="header-link">
            Reviews
          </a>

          <span className="material-symbols-outlined nav-icon">lock</span>
          <span className="notif-icon">1</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
