import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import resumePDF from "../assets/documents/resume.pdf";
import "../styles/component-styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-content">
      <div className="hero">
        <img
          src="/src/assets/images/profile-pic.jpeg"
          alt="Kenny Hector"
          className="profile-pic"
        />
        <div className="header-content">
          <div className="intro-text">
            <h1 className="name-heading">
              Hi,{" "}
              <span className="name-placeholder">
                <Typewriter
                  onInit={(typewriter) =>
                    typewriter.typeString("I'm Kenny").start()
                  }
                />
              </span>
            </h1>
            <p className="subtitle">
              Full-Stack Developer · AWS Certified · React · Node.js · DynamoDB
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>{" "}
            |{" "}
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="hero-links">
            <Link to="/portfolio" className="cta-button">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button">
              Contact Me
            </Link>
            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              className="cta-button"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
