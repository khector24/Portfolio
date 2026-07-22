import "../styles/page-styles/Contact.css";

import EmailIcon from "../assets/icons/email-icon.svg?react";
import GitHubIcon from "../assets/icons/github-icon.svg?react";
import ExternalLinkIcon from "../assets/icons/external-link.svg?react";

import PlusIcon from "../assets/illustrations/plus.svg?react";
import TriangleIcon from "../assets/illustrations/triangle.svg?react";
import BlobIcon from "../assets/illustrations/blob2.svg?react";
import VerticalDotsIcon from "../assets/illustrations/vertical-dots.svg?react";

export default function Contact() {
  return (
    <main className="contact-page">
      <PlusIcon
        className="contact-decor contact-decor-plus"
        aria-hidden="true"
      />

      <TriangleIcon
        className="contact-decor contact-decor-triangle"
        aria-hidden="true"
      />

      <BlobIcon
        className="contact-decor contact-decor-blob-left"
        aria-hidden="true"
      />

      <BlobIcon
        className="contact-decor contact-decor-blob-right"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="contact-decor contact-decor-dots"
        aria-hidden="true"
      />

      <div className="contact-wrapper">
        <header className="contact-header" data-aos="fade-up">
          <span className="contact-eyebrow">Contact</span>

          <h1>Let&apos;s Connect</h1>

          <div className="contact-heading-line" />

          <p>
            I&apos;d love to connect! Whether you have a project in mind, want
            to collaborate, or just say hello — feel free to reach out.
          </p>
        </header>

        <div className="contact-cards">
          <a
            className="contact-card"
            href="mailto:kennyhector24@gmail.com"
            data-aos="fade-up"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <EmailIcon />
            </span>

            <span className="contact-card-content">
              <span className="contact-card-title">Email</span>
              <span className="contact-card-value">
                kennyhector24@gmail.com
              </span>
            </span>

            <ExternalLinkIcon
              className="contact-card-arrow"
              aria-hidden="true"
            />
          </a>

          <a
            className="contact-card"
            href="https://github.com/khector24"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <GitHubIcon />
            </span>

            <span className="contact-card-content">
              <span className="contact-card-title">GitHub</span>
              <span className="contact-card-value">@khector24</span>
            </span>

            <ExternalLinkIcon
              className="contact-card-arrow"
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="contact-note" data-aos="fade-up">
          Looking forward to hearing from you and working together!
        </p>
      </div>
    </main>
  );
}
