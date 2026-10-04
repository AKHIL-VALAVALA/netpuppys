import { image, highlights } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Facilities() {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-image">
        <img
          src={image("photo-1509062522246-3755977927d7", 2000)}
          alt="Students learning and growing together on campus"
          loading="lazy"
        />
      </div>
      <div className="campus-panel">
        <Reveal>
          <SectionHeading
            eyebrow="The Tulas difference"
            title={
              <>
                Space to become
                <br />
                <em>your best self.</em>
              </>
            }
            light
            description="A safe, encouraging environment where students can try new things, find their strengths and build lasting friendships."
          />
        </Reveal>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <div className="highlight">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <a
          className="underlined-link link-light"
          href="https://tis.edu.in/virtual-tour/"
          target="_blank"
          rel="noreferrer"
        >
          Take the virtual tour <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
