import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/component-styles/Navbar.css";
import MenuBar from "../assets/icons/menu-bar.svg";
import ResumeIcon from "../assets/icons/resume-icon.svg";
import EmailIcon from "../assets/icons/email-icon.svg";
import GitHubIcon from "../assets/icons/github-icon.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-left">
        <span>Kenny H.</span>
      </div>

      <img
        src={MenuBar}
        alt="Menu Bar"
        className={`menu-bar ${showMenu ? "" : "rotate"}`}
        onClick={toggleMenu}
      />

      {showMenu && (
        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <Link to="/about" className="nav-link">
            About
          </Link> */}
          <Link to="/career" className="nav-link">
            Career
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>

          <hr />

          <div className="nav-icons">
            <a href="mailto:kennyhector24@gmail.com">
              <img src={EmailIcon} alt="Email" />
            </a>
            <a href="" className="nav-link">
              <img src={ResumeIcon} alt="Resume" />
            </a>
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
