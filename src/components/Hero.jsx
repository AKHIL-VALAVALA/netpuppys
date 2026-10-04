import { useEffect, useState } from "react";
import { image } from "../content.js";

const slides = [
  {
    leftImage: image("photo-1461896836934-ffe607ba8211", 850),
    rightImage: image("photo-1509062522246-3755977927d7", 850),
    leftText: "Students training together on an outdoor sports field",
    rightText: "Students learning together in a bright classroom",
  },
  {
    leftImage: image("photo-1427504494785-3a9ca7044f45", 850),
    rightImage: image("photo-1461896836934-ffe607ba8211", 850),
    leftText: "Students sharing ideas during a lesson",
    rightText: "Students taking part in school sports",
  },
  {
    leftImage: image("photo-1509062522246-3755977927d7", 850),
    rightImage: image("photo-1427504494785-3a9ca7044f45", 850),
    leftText: "A collaborative classroom at Tulas",
    rightText: "Students working together in class",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  function showPreviousSlide() {
    setActiveSlide((activeSlide + slides.length - 1) % slides.length);
  }

  function showNextSlide() {
    setActiveSlide((activeSlide + 1) % slides.length);
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <img
          key={slide.leftImage}
          className="hero-athletes hero-slide-image"
          src={slide.leftImage}
          alt={slide.leftText}
          fetchPriority="high"
        />
        <img
          key={slide.rightImage}
          className="hero-dancer hero-slide-image"
          src={slide.rightImage}
          alt={slide.rightText}
          fetchPriority="high"
        />
        <div className="hero-title-wrap">
          <p className="hero-kicker">WELCOME TO TULAS INTERNATIONAL SCHOOL</p>
          <h1 id="hero-title">
            LET’S DO <em>it</em>
            <br />
            <span>
              With <b>Tulas</b>
            </span>
          </h1>
          <span className="hero-underline" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-pagination" aria-label="Hero image navigation">
        <button
          type="button"
          className="hero-pagination-arrow"
          aria-label="Show previous images"
          onClick={showPreviousSlide}
        >
          ‹
        </button>

        <div className="hero-pagination-dots">
          {slides.map((item, index) => (
            <button
              key={item.leftImage}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              aria-label={`Show image set ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="hero-pagination-arrow"
          aria-label="Show next images"
          onClick={showNextSlide}
        >
          ›
        </button>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll to discover Tulas">
        ↓
      </a>
      <span className="visually-hidden" aria-live="polite" aria-atomic="true">
        Image set {activeSlide + 1} of {slides.length}
      </span>
    </section>
  );
}
