import { Link } from "react-router-dom";
import "../styles/component-styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <span>Kenny Hector</span>
      </div>
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
      </div>
    </nav>
  );
}
