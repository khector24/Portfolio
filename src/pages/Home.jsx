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
          <h2 className="hero-intro">Hi,</h2>
          <h1 className="name-heading">
            I'm <span className="name-placeholder">Kenny</span> Welcome
          </h1>
          <p className="subtitle">
            A passionate developer crafting innovative solutions.
          </p>
        </div>

        <p className="subtitle">
          Full-Stack Developer | AWS Certified | React | Node.js | DynamoDB
        </p>
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
          <a href={resumePDF} download className="cta-button">
            Download Resume
          </a>
        </div>
        {/* <p className="zen-joke">{zenQuote}</p> */}
      </section>

      <section>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am a full-stack developer with a passion for building scalable web
          applications. My expertise lies in React, Node.js, and AWS services,
          allowing me to create efficient and robust solutions.
        </p>
        <p className="about-text">
          With a strong foundation in both front-end and back-end technologies,
          I enjoy tackling complex challenges and delivering high-quality code.
          Whether it's developing user-friendly interfaces or optimizing server
          performance, I strive to create seamless user experiences.
        </p>
      </section>

      <section className="what-i-do-section" data-aos="fade-right">
        <div className="what-i-do">
          <h2 className="section-heading">What I Do</h2>
          <p>
            I build fast, scalable, and secure web applications — from
            responsive front-end interfaces with React to AWS-backed cloud
            solutions. Whether it's automating internal tools or launching
            client-facing platforms, I deliver full-stack solutions that solve
            real problems.
          </p>
        </div>
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
