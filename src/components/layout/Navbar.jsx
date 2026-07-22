import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/component-styles/layout/Navbar.css";

import MenuBar from "../../assets/icons/menu-bar.svg?react";
import ResumeIcon from "../../assets/icons/resume-icon.svg?react";
import EmailIcon from "../../assets/icons/email-icon.svg?react";
import GitHubIcon from "../../assets/icons/github-icon.svg?react";
import resumePDF from "../../assets/documents/resume.pdf";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu]);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="navbar-brand"
        aria-label="Go to homepage"
        onClick={closeMenu}
      >
        Kenny H.
      </NavLink>

      <div className="navbar-menu-container" ref={menuRef}>
        <button
          type="button"
          className={`navbar-menu-button ${showMenu ? "is-open" : ""}`}
          onClick={() => setShowMenu((currentValue) => !currentValue)}
          aria-label={
            showMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showMenu}
          aria-controls="navbar-dropdown"
        >
          <MenuBar className="navbar-menu-icon" aria-hidden="true" />
        </button>

        {showMenu && (
          <div
            id="navbar-dropdown"
            className="navbar-dropdown"
            aria-label="Main navigation"
          >
            <div className="navbar-links">
              <NavItem to="/" onClick={closeMenu}>
                Home
              </NavItem>

              <NavItem to="/career" onClick={closeMenu}>
                Career
              </NavItem>

              <NavItem to="/portfolio" onClick={closeMenu}>
                Portfolio
              </NavItem>

              <NavItem to="/contact" onClick={closeMenu}>
                Contact
              </NavItem>
            </div>

            <div className="navbar-divider" />

            <div className="navbar-social-links">
              <a
                href="mailto:kennyhector24@gmail.com"
                className="navbar-social-link"
                aria-label="Email Kenny"
              >
                <EmailIcon aria-hidden="true" />
              </a>

              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-social-link"
                aria-label="View Kenny's resume"
              >
                <ResumeIcon aria-hidden="true" />
              </a>

              <a
                href="https://github.com/khector24"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-social-link"
                aria-label="Visit Kenny's GitHub profile"
              >
                <GitHubIcon aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `navbar-link ${isActive ? "navbar-link-active" : ""}`
      }
    >
      <span>{children}</span>
    </NavLink>
  );
}
