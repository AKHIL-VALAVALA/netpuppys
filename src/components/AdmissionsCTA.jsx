import { image } from "../content.js";

export default function AdmissionsCTA() {
  return (
    <section className="admissions-section">
      <div className="admissions-bg">
        <img
          src={image("photo-1461896836934-ffe607ba8211", 1800)}
          alt="Students taking part in school sports"
          loading="lazy"
        />
      </div>
      <div className="admissions-shade" />
      <div className="wrap admissions-content">
        <span className="eyebrow">Your next chapter starts here</span>
        <h2>
          Find your place
          <br />
          at <em>Tulas.</em>
        </h2>
        <p>
          Join a community that encourages leadership, innovation and lifelong
          learning.
        </p>
        <div className="hero-actions">
          <a className="button button-aqua" href="#contact">
            Apply now <span aria-hidden="true">↓</span>
          </a>
          <a className="hero-text-link" href="#contact">
            Talk to admissions <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
