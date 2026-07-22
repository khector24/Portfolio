import "../../styles/component-styles/career/CareerCard.css";

export default function CareerCard({
  title,
  company,
  location,
  dateRange,
  bullets = [],
  tech = [],
  type,
}) {
  const cardClassName = [
    "career-card",
    type === "education" ? "career-card-education" : "",
    type === "certification" ? "career-card-certification" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName} data-aos="fade-up">
      <div className="career-card-header">
        <div className="career-card-heading">
          <h3>
            {title}
            <span className="career-title-separator" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span className="career-company">{company}</span>
          </h3>

          <p className="career-location">{location}</p>
        </div>

        <p className="career-date-range">{dateRange}</p>
      </div>

      {bullets.length > 0 && (
        <ul className="career-bullet-points">
          {bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="career-tech-tags">
          {tech.map((item) => (
            <span key={item} className="career-tag">
              {item}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
