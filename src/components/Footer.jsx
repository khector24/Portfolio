import { Link } from "react-router-dom";
import "../styles/component-styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-heading">Let's Connect</p>
          <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
          <div className="footer-socials">
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kennyhector"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-right">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kenny Hector</p>
        <p>
          Icons by{" "}
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
}
