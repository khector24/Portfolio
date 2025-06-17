export default function Accordion({ title, content }) {
  return (
    <div className="accordion">
      <h2 className="accordion-title">{title}</h2>
      <div className="accordion-content">{content}</div>
    </div>
  );
}
