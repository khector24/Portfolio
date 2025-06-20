import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import resumePDF from "../assets/documents/resume.pdf";
import "../styles/component-styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-content">
      <div className="hero" data-aos="fade-up">
        <img
          src="/src/assets/images/profile-pic.jpeg"
          alt="Kenny Hector"
          className="profile-pic"
          data-aos="zoom-in"
        />
        <div className="header-content">
          <div className="intro-text" data-aos="fade-right">
            <h1 className="name-heading">
              Hi,{" "}
              <span className="name-placeholder">
                <Typewriter
                  onInit={(typewriter) =>
                    typewriter.pauseFor(1500).typeString("I'm Kenny").start()
                  }
                />
              </span>
            </h1>
            <p className="subtitle">
              Full-Stack Developer · AWS Certified · React · Node.js · DynamoDB
            </p>
          </div>
          <div className="contact-links" data-aos="fade-up">
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
          <div className="hero-links" data-aos="fade-up" data-aos-delay="200">
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
