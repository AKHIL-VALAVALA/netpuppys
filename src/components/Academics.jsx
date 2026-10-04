import { image } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Academics() {
  return (
    <section className="learning-section section-pad" id="academics">
      <div className="wrap learning-layout">
        <Reveal>
          <SectionHeading
            eyebrow="Learning at Tulas"
            title={
              <>
                Curiosity is the
                <br />
                <em>start of everything.</em>
              </>
            }
            description="Our CBSE curriculum builds strong foundations and gives students room to discover what they can do."
          />
        </Reveal>
        <Reveal className="learning-quote" delay={120} id="pedagogy">
          <span className="quote-mark">“</span>
          <p>
            When students are inspired, they don’t just learn—they grow,
            explore, and shape their own futures.
          </p>
          <a className="underlined-link" href="#curriculum">
            Explore academics <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
        <div className="learning-photo">
          <img
            src={image("photo-1427504494785-3a9ca7044f45")}
            alt="Students collaborating during a lesson"
            loading="lazy"
          />
          <span>LEARNING THAT GOES BEYOND THE CLASSROOM</span>
        </div>
        <div className="curriculum-grid">
          <article className="curriculum-card" id="curriculum">
            <span>01 / OUR APPROACH</span>
            <h3>Strong foundations, curious minds.</h3>
            <p>
              Students build core knowledge and learn to ask questions,
              exchange ideas and apply what they discover.
            </p>
          </article>
          <article className="curriculum-card" id="streams">
            <span>02 / FIND YOUR DIRECTION</span>
            <h3>Learning that grows with you.</h3>
            <p>
              Explore your interests through classroom learning and activities
              that encourage every student to take part.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
