import "../styles/page-styles/Portfolio.css";

import { Link } from "react-router-dom";
import { featuredProjects } from "../data/portfolioData";

import PortfolioCard from "../components/portfolio/PortfolioCard";

import PlusIcon from "../assets/illustrations/plus.svg?react";
import TriangleIcon from "../assets/illustrations/triangle.svg?react";
import LightningIcon from "../assets/illustrations/lightning-svgrepo-com.svg?react";
import VerticalDotsIcon from "../assets/illustrations/vertical-dots.svg?react";

import ExternalLinkIcon from "../assets/icons/external-link.svg?react";

const featuredProjectTitles = [
  "RegionLore",
  "Splash Zone Aquatics Website",
  "Delivery Management App",
];

export default function Portfolio() {
  const showcaseProjects = featuredProjects.filter((project) =>
    featuredProjectTitles.includes(project.title),
  );

  const additionalProjects = featuredProjects.filter(
    (project) => !featuredProjectTitles.includes(project.title),
  );

  return (
    <main className="portfolio-page">
      <PlusIcon className="portfolio-decor portfolio-decor-plus" />
      <TriangleIcon className="portfolio-decor portfolio-decor-triangle" />
      <LightningIcon className="portfolio-decor portfolio-decor-lightning" />
      <VerticalDotsIcon className="portfolio-decor portfolio-decor-dots" />

      <div className="portfolio-wrapper">
        <header className="portfolio-header" data-aos="fade-up">
          <span className="portfolio-eyebrow">Portfolio</span>

          <h1>My Portfolio</h1>

          <div className="portfolio-heading-line" />

          <p>
            A selection of full-stack applications, cloud projects, and
            interactive experiences I have designed and developed.
          </p>
        </header>

        <section className="portfolio-section">
          <div className="portfolio-section-heading" data-aos="fade-up">
            <span className="portfolio-section-icon" aria-hidden="true">
              ☆
            </span>

            <div>
              <h2>Featured Projects</h2>
              <p>
                My most impactful work and the projects that best represent me.
              </p>
            </div>
          </div>

          <div className="featured-project-list">
            {showcaseProjects.map((project, index) => (
              <PortfolioCard
                key={project.title}
                {...project}
                featured
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {additionalProjects.length > 0 && (
          <section className="portfolio-section more-projects-section">
            <div className="portfolio-section-heading" data-aos="fade-up">
              <span
                className="portfolio-section-icon portfolio-grid-icon"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
                <span />
              </span>

              <div>
                <h2>More Projects</h2>
                <p>
                  Additional projects I built to learn, experiment, and solve
                  practical problems.
                </p>
              </div>
            </div>

            <div className="more-projects-grid">
              {additionalProjects.map((project) => (
                <PortfolioCard
                  key={project.title}
                  {...project}
                  featured={false}
                />
              ))}
            </div>
          </section>
        )}

        <section className="portfolio-contact-cta" data-aos="fade-up">
          <div className="portfolio-contact-content">
            <span className="portfolio-contact-icon" aria-hidden="true">
              <ExternalLinkIcon />
            </span>

            <div>
              <h2>Interested in working together?</h2>
              <p>
                I’m always open to new opportunities, collaborations, and
                exciting projects.
              </p>
            </div>
          </div>

          <Link className="portfolio-contact-button" to="/contact">
            Contact Me
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
