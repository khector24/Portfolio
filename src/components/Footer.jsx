import { Link } from "react-router-dom";
import "../styles/component-styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h2>Let's Connect!</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
          <a
            href="mailto:kennyhector24@gmail.com"
            className="footer-contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <p>
            Follow me on{" "}
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/kennyhector"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="footer-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/portfolio" className="nav-link">
            Projects
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Kenny Hector. All rights reserved.
        </p>
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
