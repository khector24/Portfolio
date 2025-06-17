import { Link } from "react-router-dom";
import "../styles/page-styles/Home.css";
import resumePDF from "../assets/documents/resume.pdf";

import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import awsLogo from "../assets/logos/aws.svg";
import javaLogo from "../assets/logos/java.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import gitLogo from "../assets/logos/git.svg";
import expressLogo from "../assets/logos/express.svg";

export default function Home() {
  return (
    <main>
      <section className="home-hero-content">
        <img
          src="/src/assets/images/profile-pic.jpeg"
          alt="Kenny Hector"
          className="profile-pic"
        />
        <div className="intro-text">
          <h1 className="name-heading">
            Hi, I'm <span className="name-placeholder">Kenny Hector</span>
          </h1>
          <p className="subtitle">
            Full-Stack Developer · AWS Certified · React · Node.js · DynamoDB
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/khector24"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="home-buttons">
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

        {/* <p className="zen-joke">{zenQuote}</p> */}
      </section>

      <section className="who-am-i-section" data-aos="fade-right">
        <h2 className="section-heading">Who Am I</h2>
        <p>
          I’m Kenny Hector — a full-stack developer who thrives on building
          efficient, secure, and scalable web applications. My expertise spans
          React, Node.js, and AWS, and I’ve used them to power both internal
          tools and client-facing platforms.
        </p>
        <p>
          Whether crafting intuitive user interfaces or architecting robust
          back-end systems, I bring a passion for problem-solving, clean code,
          and creating real-world impact through technology.
        </p>
      </section>

      <section className="tech-logos-section" data-aos="fade-left">
        <div className="tech-logos">
          <h2 className="section-heading">Tech I Use</h2>
          <div className="logo-grid">
            <img src={reactLogo} alt="React" />
            <img src={nodeLogo} alt="Node.js" />
            <img src={awsLogo} alt="AWS" />
            <img src={javaLogo} alt="Java" />
            <img src={mysqlLogo} alt="MySQL" />
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={gitLogo} alt="Git" />
            <img src={expressLogo} alt="Express.js" />
          </div>
        </div>
      </section>
    </main>
  );
}
