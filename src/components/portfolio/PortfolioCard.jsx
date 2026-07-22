import { useState } from "react";

import "../../styles/component-styles/portfolio/PortfolioCard.css";

import GitHubIcon from "../../assets/icons/github-icon.svg?react";
import ExternalLinkIcon from "../../assets/icons/external-link.svg?react";

export default function PortfolioCard({
  title,
  description,
  link,
  tags = [],
  images = [],
  hasLiveLink,
  liveLink,
  featured = false,
  reverse = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectImages = images ?? [];
  const hasMultipleImages = projectImages.length > 1;

  const currentImage =
    projectImages[currentIndex] ?? "/assets/portfolio-pics/black.png";

  const isPlaceholder =
    projectImages.length === 1 &&
    currentImage.toLowerCase().includes("placeholder");

  const handlePrevious = () => {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((previousIndex) => {
      if (previousIndex === 0) {
        return projectImages.length - 1;
      }

      return previousIndex - 1;
    });
  };

  const handleNext = () => {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((previousIndex) => {
      if (previousIndex === projectImages.length - 1) {
        return 0;
      }

      return previousIndex + 1;
    });
  };

  const cardClassName = [
    "project-card",
    featured ? "project-card-featured" : "project-card-compact",
    reverse ? "project-card-reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName} data-aos="fade-up">
      <ProjectImage
        title={title}
        currentImage={currentImage}
        currentIndex={currentIndex}
        hasMultipleImages={hasMultipleImages}
        isPlaceholder={isPlaceholder}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        featured={featured}
      />

      <div className="project-card-content">
        {featured && (
          <span className="project-type-label">Full-Stack Web App</span>
        )}

        <h3>{title}</h3>

        <p className="project-description">{description}</p>

        <div className="project-tags" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          {hasLiveLink && liveLink && (
            <a
              className="project-button project-button-primary"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="project-button-icon" />
              <span>Visit Website</span>
            </a>
          )}

          {link && (
            <a
              className="project-button project-button-secondary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="project-button-icon" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectImage({
  title,
  currentImage,
  currentIndex,
  hasMultipleImages,
  isPlaceholder,
  handlePrevious,
  handleNext,
  featured,
}) {
  return (
    <div
      className={
        featured
          ? "project-media project-media-featured"
          : "project-media project-media-compact"
      }
    >
      <div className="browser-frame">
        <div className="browser-frame-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="project-image-container">
          <img
            className="project-image"
            src={currentImage}
            alt={`${title} screenshot ${currentIndex + 1}`}
          />

          {isPlaceholder && (
            <p className="project-placeholder-note">
              Internal project — screenshots unavailable.
              <br />
              Images will be added when possible.
            </p>
          )}

          {hasMultipleImages && (
            <>
              <button
                className="carousel-button carousel-button-left"
                type="button"
                onClick={handlePrevious}
                aria-label={`Show previous ${title} screenshot`}
              >
                ‹
              </button>

              <button
                className="carousel-button carousel-button-right"
                type="button"
                onClick={handleNext}
                aria-label={`Show next ${title} screenshot`}
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
