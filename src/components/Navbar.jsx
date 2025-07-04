import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/component-styles/Navbar.css";
import MenuBar from "../assets/icons/menu-bar.svg";
import ResumeIcon from "../assets/icons/resume-icon.svg";
import EmailIcon from "../assets/icons/email-icon.svg";
import GitHubIcon from "../assets/icons/github-icon.svg";
import resumePDF from "../assets/documents/resume.pdf";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-left">
        <span>Kenny H.</span>
      </div>

      <div className="menu-container" ref={menuRef}>
        <img
          src={MenuBar}
          alt="Menu Bar"
          className={`menu-bar ${showMenu ? "" : "rotate"}`}
          onClick={toggleMenu}
        />

        {showMenu && (
          <div className="nav-right">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/career"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Career
            </Link>
            <Link
              to="/portfolio"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
            <hr />
            <div className="nav-icons">
              <a href="mailto:kennyhector24@gmail.com">
                <img src={EmailIcon} alt="Email" />
              </a>
              <a href={resumePDF} target="_blank" rel="noreferrer">
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
      </div>
    </nav>
  );
}
