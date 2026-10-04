export default function SectionHeading({ eyebrow, title, light = false, description }) {
  return (
    <div className={`section-heading ${light ? "heading-light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
