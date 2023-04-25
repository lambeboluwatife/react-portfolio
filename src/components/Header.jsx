import Resume from "../assets/Boluwatife's Resume.pdf";
const Header = () => {
  return (
    <div className=" container header">
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
        <a
          href={Resume}
          rel="noreferrer"
          target="_blank"
          className="contact-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
