import { rankings, visitors } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function WhyTIS() {
  return (
    <>
      <section className="rankings-section section-pad" id="rankings">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              eyebrow="Recognised for what matters"
              title={
                <>
                  A little recognition.
                  <br />
                  <em>A lot of hard work.</em>
                </>
              }
            />
          </Reveal>
          <div className="ranking-grid">
            {rankings.map((item, index) => (
              <Reveal key={item.place} delay={index * 70}>
                <article className="ranking-card">
                  <span className="ranking-number">{item.number}</span>
                  <h3>{item.place}</h3>
                  <p>{item.detail}</p>
                  <span className="ranking-source">{item.source}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="visitors-section section-pad" id="visitors">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              eyebrow="People who inspire"
              title={
                <>
                  Influential personalities
                  <br />
                  <em>on campus.</em>
                </>
              }
              description="Sportspeople, artists and leaders have shared their stories with our students."
            />
          </Reveal>
          <div className="visitor-grid">
            {visitors.map(([name, detail], index) => (
              <Reveal key={name} delay={(index % 4) * 60}>
                <article className="visitor-card">
                  <span className="visitor-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{name}</h3>
                    <p>{detail}</p>
                  </div>
                  <span className="visitor-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="awards-band" id="awards">
        <div className="wrap awards-inner">
          <div>
            <span className="eyebrow">The effort behind every milestone</span>
            <h2>
              Celebrating the
              <br />
              <em>hard work.</em>
            </h2>
          </div>
          <p>
            We believe in celebrating the hard work and perseverance of the
            best. Every achievement is a reminder of what students can do when
            they are supported to go further.
          </p>
          <a className="button button-light" href="#about">
            Explore TIS <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </>
  );
}
