import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/portfolioData";
import "../../styles/component-styles/home/FeaturedProjects.css";

import GithubIcon from "../../assets/icons/github-icon.svg?react";

// Decorative SVGs
import PlusIcon from "../../assets/illustrations/plus.svg?react";
import TriangleIcon from "../../assets/illustrations/triangle.svg?react";
import BlobIcon from "../../assets/illustrations/blob2.svg?react";
import LightningIcon from "../../assets/illustrations/lightning-svgrepo-com.svg?react";
import VerticalDotsIcon from "../../assets/illustrations/vertical-dots.svg?react";
import FiveCirclesIcon from "../../assets/illustrations/five-circles.svg?react";

export default function FeaturedProjects() {
  const homepageProjects = featuredProjects.slice(0, 2);

  const projectDetails = {
    RegionLore: {
      label: "Flagship Project",
      displayTitle: "RegionLore",
      description:
        "A full-stack analytics platform for exploring demographic, migration, education, housing, labor-market, and economic data across U.S. states and metropolitan areas. Built with ETL pipelines, REST APIs, maps, charts, rankings, and regional comparisons.",
      liveButtonText: "Live Demo",
    },

    "Splash Zone Aquatics Website": {
      label: "Production Client Project",
      displayTitle: "Splash Zone Aquatics",
      description:
        "A production website and cloud email platform built for a swim school. Responsive design, program information, contact workflows, and automated email features contributed to approximately 50% of seasonal registrations before the summer launch.",
      liveButtonText: "Visit Website",
    },
  };

  return (
    <section className="featured-projects-section bg-dark">
      {/* Decorative SVGs */}
      <PlusIcon
        className="featured-projects-decor featured-projects-plus"
        aria-hidden="true"
      />

      <TriangleIcon
        className="featured-projects-decor featured-projects-triangle"
        aria-hidden="true"
      />

      <BlobIcon
        className="featured-projects-decor featured-projects-blob"
        aria-hidden="true"
      />

      <LightningIcon
        className="featured-projects-decor featured-projects-lightning"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="featured-projects-decor featured-projects-dots-left"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="featured-projects-decor featured-projects-dots-right"
        aria-hidden="true"
      />

      <FiveCirclesIcon
        className="featured-projects-decor featured-projects-circles"
        aria-hidden="true"
      />

      <div className="featured-projects-wrapper">
        <header className="featured-projects-header" data-aos="fade-up">
          <p className="featured-projects-eyebrow">Featured Work</p>

          <h2>Projects I&apos;m Proud Of</h2>

          <p className="featured-projects-intro">
            From production websites to full-stack data platforms, these
            projects represent the work I&apos;m most proud of.
          </p>

          <span className="featured-projects-divider" />
        </header>

        <div className="featured-projects-list">
          {homepageProjects.map((project, projectIndex) => {
            const isReversed = projectIndex % 2 !== 0;

            const details = projectDetails[project.title] || {
              label: "Featured Project",
              displayTitle: project.title,
              description: project.description,
              liveButtonText: "View Project",
            };

            return (
              <article
                key={project.title}
                className={`featured-project-card ${
                  isReversed ? "featured-project-card-reversed" : ""
                }`}
                data-aos="fade-up"
              >
                <div className="featured-project-image-container">
                  <img
                    src={project.images[0]}
                    alt={`${details.displayTitle} website preview`}
                    className="featured-project-image"
                  />
                </div>

                <div className="featured-project-content">
                  <span className="featured-project-label">
                    {details.label}
                  </span>

                  <h3>{details.displayTitle}</h3>

                  <p className="featured-project-description">
                    {details.description}
                  </p>

                  <div className="featured-project-tags">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span key={tag} className="featured-project-tag">
                        {formatTag(tag)}
                      </span>
                    ))}
                  </div>

                  <div className="featured-project-actions">
                    {project.hasLiveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="featured-project-button featured-project-button-primary"
                      >
                        <span aria-hidden="true">↗</span>
                        {details.liveButtonText}
                      </a>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="featured-project-button featured-project-button-secondary"
                    >
                      <GithubIcon
                        className="featured-project-button-icon"
                        aria-hidden="true"
                      />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-projects-more" data-aos="fade-up">
          <div className="featured-projects-more-icon" aria-hidden="true">
            ☆
          </div>

          <div className="featured-projects-more-text">
            <h3>Want to see more?</h3>
            <p>Explore all of my projects and development work.</p>
          </div>

          <Link to="/portfolio" className="featured-projects-view-all-button">
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatTag(tag) {
  const tagLabels = {
    react: "React",
    node: "Node.js",
    express: "Express",
    aws: "AWS",
    etl: "ETL",
    "rest-api": "REST API",
    "data-visualization": "Data Visualization",
    lambda: "Lambda",
    dynamodb: "DynamoDB",
    resend: "Resend",
    "material-ui": "Material UI",
  };

  return tagLabels[tag] || tag;
}
