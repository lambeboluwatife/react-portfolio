import Resume from "../assets/Boluwatife's Resume.pdf";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" container header">
      <div className="logo">L.B.D</div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
