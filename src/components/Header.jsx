const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <div className="logo">
              <a href="#">ucyap</a>
            </div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Careers</a>
              <a href="#" className="link-btn">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
