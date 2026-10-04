import { reviews } from "../content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Testimonials() {
  return (
    <>
      <section className="voices-section section-pad" id="voices">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              eyebrow="From the parents"
              title={
                <>
                  It means more when
                  <br />
                  <em>families say it.</em>
                </>
              }
            />
          </Reveal>
          <div className="review-feature">
            <div className="review-feature-image">
              <img
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85"
                alt="A family spending time together"
                loading="lazy"
              />
              <span>THE TULAS COMMUNITY</span>
            </div>
            <div className="review-feature-quote">
              <span className="quote-mark">“</span>
              <blockquote>
                Tulas International School has truly exceeded our expectations.
                The focus on holistic development and the encouragement provided
                by the teachers have played a significant role in our child’s
                growth.
              </blockquote>
              <span className="review-attribution">A Tulas parent</span>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index * 80}>
                <article className="review-card">
                  <span className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  <p>“{review.quote}”</p>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.relation}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <a
            className="underlined-link review-link"
            href="https://www.google.com/search?q=Tulas+International+School+reviews"
            target="_blank"
            rel="noreferrer"
          >
            Read more parent reviews <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="collaborations-section" id="collaborations">
        <div className="wrap collaborations-layout">
          <div>
            <span className="eyebrow">Opportunities beyond the classroom</span>
            <h2>
              <strong>12+</strong>
              <br />
              <em>collaborations.</em>
            </h2>
          </div>
          <p>
            Partnerships broaden student exposure and create more ways to
            explore interests, build skills and imagine what comes next.
          </p>
          <div className="collaboration-ribbon">
            <span>TULAS INTERNATIONAL SCHOOL</span>
            <i>✳</i>
            <span>12+ COLLABORATIONS</span>
            <i>✳</i>
            <span>LEARNING · LEADING · LIVING</span>
          </div>
        </div>
      </section>
    </>
  );
}
