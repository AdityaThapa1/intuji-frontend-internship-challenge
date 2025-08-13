const Header = () => {
  return (
    <header className="header container">
      <a href="#" className="header_logo">AR SHAKIR</a>
      <nav className="header_nav">
        <a href="#" className="header_nav-link">Product<span>&#9662;</span></a>
        <a href="#" className="header_nav-link">Template<span>&#9662;</span></a>
        <a href="#" className="header_nav-link">Blog</a>
        <a href="#" className="header_nav-link">Pricing</a>
      </nav>
      <div className="header_actions">
        <a href="#" className="btn btn-secondary">Sign In</a>
        <a href="#" className="btn btn-primary">Start Free</a>
      </div>
      <button className="header_menu-toggle" aria-label="Open Navigation Menu">&#9776;</button>
    </header>
  );
};

export default Header;