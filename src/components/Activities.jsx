import { image, sports } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Activities() {
  return (
    <section className="sports-section section-pad" id="sports">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Move with purpose"
            title={
              <>
                Sports? At Tulas, it’s
                <br />
                <em>the foundation.</em>
              </>
            }
            description={
              <>
                More than a facility: <strong>16+ sports</strong> curated to
                bring joy, confidence and discipline to student life.
              </>
            }
          />
        </Reveal>
        <div className="sports-layout">
          <Reveal className="sports-photo">
            <img
              src={image("photo-1461896836934-ffe607ba8211")}
              alt="Students training on an outdoor sports field"
              loading="lazy"
            />
            <span className="photo-label">FIND YOUR GAME</span>
          </Reveal>
          <div className="sports-list" aria-label="Sports at Tulas">
            {sports.map((sport, index) => (
              <Reveal key={sport} delay={(index % 4) * 55}>
                <div className="sport-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{sport}</strong>
                  <span aria-hidden="true">↗</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
