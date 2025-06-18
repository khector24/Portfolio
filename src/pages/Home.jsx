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
    <main className="home">
      <section className="hero-content">
        <img
          src="/src/assets/images/profile-pic.jpeg"
          alt="Kenny Hector"
          className="profile-pic"
        />
        <div className="header-content">
          <div className="intro-text">
            <h1 className="name-heading">
              Hi, I'm <span className="name-placeholder">Kenny Hector</span>
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

        {/* <p className="zen-joke">{zenQuote}</p> */}
      </section>

      <section className="who-am-i-section">
        <div className="i-am">
          <h2 className="section-heading">Who I Am</h2>
          <p>
            I’m Kenny Hector — a full-stack developer passionate about crafting
            secure, scalable, and efficient web applications. My stack spans
            React, Node.js, and AWS, which I’ve used to power internal tools and
            customer-facing platforms.
          </p>
        </div>
      </section>

      <section className="what-i-bring-section">
        <div className="do-card">
          <h3>What I Build</h3>
          <p>
            I develop systems that are not only functional but built for
            performance and longevity — from tools that automate internal
            workflows to customer-facing apps that scale.
          </p>
        </div>
        <div className="do-card">
          <h3>How I Design</h3>
          <p>
            I prioritize clarity, simplicity, and purpose. Whether architecting
            APIs or crafting UI components, my goal is always a seamless,
            intuitive user experience.
          </p>
        </div>
      </section>

      <section className="how-i-work">
        <h2 className="section-heading">How I Work</h2>
        <p>
          I'm focused on building for scale, clarity, and maintainability.
          Whether working solo or as part of a team, I rely on clean code, clear
          communication, and efficient dev workflows to deliver solutions that
          last.
        </p>
      </section>

      <section className="skills-section">
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
