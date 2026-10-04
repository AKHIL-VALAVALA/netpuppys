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
        <Reveal className="learning-quote" delay={120}>
          <span className="quote-mark">“</span>
          <p>
            When students are inspired, they don’t just learn—they grow,
            explore, and shape their own futures.
          </p>
          <a className="underlined-link" href="https://tis.edu.in/academics/">
            Explore academics <span aria-hidden="true">↗</span>
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
      </div>
    </section>
  );
}
