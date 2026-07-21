import "../../styles/component-styles/home/TechItem.css";

export default function TechItem({ logo, title }) {
  return (
    <div className="tech-card">
      <div className="tech-card-icon">
        <img src={logo} alt="" />
      </div>

      <span className="tech-card-title">{title}</span>
    </div>
  );
}
