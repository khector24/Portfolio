import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import resumePDF from "../../assets/documents/resume.pdf";
import "../../styles/component-styles/home/Hero.css";

// Button Icons
import Email from "../../assets/icons/email-icon.svg?react";
import Briefcase from "../../assets/icons/briefcase.svg?react";
import ResumeIcon from "../../assets/icons/resume-icon.svg?react";

// Decorative SVGs
import Blob1Icon from "../../assets/illustrations/blob1.svg?react";
import TriangleIcon from "../../assets/illustrations/triangle.svg?react";
import PlusIcon from "../../assets/illustrations/plus.svg?react";
import LightningIcon from "../../assets/illustrations/lightning-svgrepo-com.svg?react";
import VerticalDotsIcon from "../../assets/illustrations/vertical-dots.svg?react";
import FiveCirclesIcon from "../../assets/illustrations/five-circles.svg?react";

export default function Hero() {
  return (
    <section className="hero-content">
      {/* Decorative SVGs */}
      <Blob1Icon className="hero-decor hero-blob" aria-hidden="true" />

      <LightningIcon className="hero-decor hero-lightning" aria-hidden="true" />

      <TriangleIcon className="hero-decor hero-triangle" aria-hidden="true" />

      <PlusIcon className="hero-decor hero-plus" aria-hidden="true" />

      <VerticalDotsIcon className="hero-decor hero-dots" aria-hidden="true" />

      <FiveCirclesIcon className="hero-decor hero-circles" aria-hidden="true" />

      <div className="hero" data-aos="fade-up">
        <img
          src="/images/hero-pic.jpeg"
          alt="Kenny Hector"
          className="hero-pic"
          data-aos="zoom-in"
        />

        <div className="header-content">
          <div className="intro-text" data-aos="fade-right">
            <h1 className="name-heading">
              Hi!{" "}
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
            <Link to="/portfolio" className="cta-button cta-button-primary">
              <Briefcase className="cta-button-icon" />
              View My Work
            </Link>

            <Link to="/contact" className="cta-button cta-button-outline">
              <Email className="cta-button-icon" />
              Contact Me
            </Link>

            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-button-secondary"
            >
              <ResumeIcon className="cta-button-icon" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
