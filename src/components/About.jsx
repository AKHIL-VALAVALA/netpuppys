import { image } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section className="intro-section section-pad" id="about">
      <div className="wrap intro-layout">
        <Reveal className="intro-image-wrap">
          <img
            src={image("photo-1509062522246-3755977927d7")}
            alt="Students learning together in a bright classroom"
            loading="lazy"
          />
          <span className="image-stamp">
            A SCHOOL
            <br />
            THAT SEES YOU
          </span>
        </Reveal>
        <Reveal className="intro-copy" delay={120}>
          <SectionHeading
            eyebrow="A little about us"
            title={
              <>
                A world of opportunity.
                <br />
                <em>One Tulas family.</em>
              </>
            }
          />
          <p className="large-copy">
            Tulas International School was established in 2012 under the aegis
            of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>
          <p>
            We provide a nurturing environment where curiosity leads, creativity
            thrives and every day brings something new to discover. Here,
            students are inspired not just to learn, but to grow, explore and
            shape their own futures.
          </p>
          <a className="underlined-link" href="https://tis.edu.in/about-us/">
            Discover our story <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
