import "../styles/component-styles/PortfolioCard.css";

export default function PortfolioCard({
  title,
  tech,
  description,
  link,
  tags,
}) {
  return (
    <div className="portfolio-card">
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
      <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
        View Code
      </a>
    </div>
  );
}
