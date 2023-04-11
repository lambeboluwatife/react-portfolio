const Header = () => {
  return (
    <div className="header">
      <div className="logo">L.B.D</div>
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Works</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <a href="/" className="contact-btn">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default Header;
