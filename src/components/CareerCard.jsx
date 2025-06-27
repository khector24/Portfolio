import "../styles/component-styles/CareerCard.css";

export default function CareerCard({
  title,
  company,
  location,
  dateRange,
  bullets,
  tech,
}) {
  return (
    <div className="career-card">
      <div className="career-card-header">
        <h3>
          {title} · <span className="company">{company}</span>
        </h3>
        <p className="date-range">{dateRange}</p>
      </div>
      <p className="location">{location}</p>
      <ul className="bullet-points">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="tech-tags">
        {tech.map((item, index) => (
          <span key={index} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
