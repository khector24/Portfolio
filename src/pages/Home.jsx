import { Link } from "react-router-dom";
import "../styles/page-styles/Home.css";
import Typewriter from "typewriter-effect";

import resumePDF from "../assets/documents/resume.pdf";

import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import awsLogo from "../assets/logos/aws.svg";
import javaLogo from "../assets/logos/java.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import gitLogo from "../assets/logos/git.svg";
import expressLogo from "../assets/logos/express-js.svg";
import bootstrapLogo from "../assets/logos/bootstrap.svg";
import postmanLogo from "../assets/logos/postman.svg";
import visualStudioLogo from "../assets/logos/visual-studio-code.svg";

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
              Hi, I'm{" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Kenny").start();
                }}
              />
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

      <section className="who-am-i-section section-full-height bg-light">
        <div className="i-am">
          <h2 className="section-heading">Who I Am</h2>
          <p>
            I’m Kenny Hector — a full-stack developer focused on building
            efficient, secure, and scalable web applications. My experience
            spans both internal tools and customer-facing platforms, powered by
            React, Node.js, and AWS.
          </p>
          <p>
            I’m not just a builder — I’m a learner, a leader, and a teammate.
            Whether I’m designing clean interfaces or architecting backend
            logic, I bring strong communication, leadership, and a commitment to
            getting things done.
          </p>
        </div>
      </section>

      <section className="what-i-do-section section-full-height bg-dark">
        <div className="do-card left-card">
          <h3>I Build</h3>
          <p>
            Scalable systems, portfolio sites, internal dashboards, and
            real-time tools that solve real-world problems.
          </p>
          <a href="/portfolio" className="sub-cta">
            See Examples →
          </a>
        </div>
        <div className="do-card right-card">
          <h3>I Design</h3>
          <p>
            Interfaces with clarity and purpose — intuitive for users, flexible
            for teams, and clean under the hood.
          </p>
          <a href="/portfolio" className="sub-cta">
            See Examples →
          </a>
        </div>
      </section>

      <section className="how-i-work section-full-height bg-light">
        <h2 className="section-heading">How I Work</h2>
        <p>
          I believe in shipping fast, refactoring often, and learning always.
          I'm adaptable, proactive, and collaborative — unafraid to lead when
          needed, always ready to pitch in where it counts.
        </p>
        <p>
          Whether flying solo or working cross-functionally, I rely on clean
          code, strong fundamentals, and a constant drive to improve.
        </p>
      </section>

      <section className="skills-section section-full-height bg-dark">
        <div className="tech-stack-container">
          <h2 className="section-heading">Tech I Use</h2>
          <p className="tech-subtitle">
            Tools and technologies I rely on to build secure, scalable, and
            responsive applications.
          </p>
          <div className="logo-grid">
            <div className="tech-item">
              <img src={reactLogo} alt="React" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <img src={nodeLogo} alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <img src={expressLogo} alt="Express.js" />
              <span>Express</span>
            </div>
            <div className="tech-item">
              <img src={awsLogo} alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="tech-item">
              <img src={javaLogo} alt="Java" />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <img src={mysqlLogo} alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <img src={htmlLogo} alt="HTML" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <img src={cssLogo} alt="CSS" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <img src={gitLogo} alt="Git" />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <img src={bootstrapLogo} alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
            <div className="tech-item">
              <img src={postmanLogo} alt="Postman" />
              <span>Postman</span>
            </div>
            <div className="tech-item">
              <img src={visualStudioLogo} alt="Visual Studio Code" />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
