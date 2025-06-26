import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/component-styles/Navbar.css";
import MenuBar from "../assets/icons/menu-bar.svg";

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
        className={`menu-bar ${showMenu ? "rotate" : ""}`}
        onClick={toggleMenu}
      />

      {showMenu && (
        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <hr />
          <div>
            <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
            <a href="" className="nav-link">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
