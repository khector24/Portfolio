import { useState } from "react";
import "../styles/component-styles/PortfolioCard.css";

export default function PortfolioCard({
  title,
  tech,
  description,
  link,
  tags,
  images,
  hasLiveLink,
  liveLink,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImg =
    images?.[currentIndex] || "/assets/portfolio-pics/black.png";

  return (
    <div className="portfolio-card">
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>
          &#8249;
        </button>
        <img
          src={currentImg}
          alt={`${title}-${currentIndex}`}
          className="project-img"
        />
        <button className="arrow right" onClick={handleNext}>
          &#8250;
        </button>
      </div>

      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="tech">{tech}</p>
      <div className="tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="links">
        <a
          href={link}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
        {hasLiveLink && (
          <a
            className="btn"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Link
          </a>
        )}
      </div>
    </div>
  );
}
