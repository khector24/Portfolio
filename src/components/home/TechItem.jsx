import "../../styles/component-styles/home/TechItem.css";

export default function TechItem({ logo, title }) {
  return (
    <div className="tech-card" key={title} data-aos="zoom-in">
      <img src={logo} alt={title} />
      <span>{title}</span>
    </div>
  );
}
