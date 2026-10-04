import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const stories = [
  {
    category: "Campus life",
    title: "A day in the life at Tulas",
    description:
      "Discover the people, places and everyday moments that make our campus feel like home.",
    link: "#campus",
    linkText: "Explore campus life",
  },
  {
    category: "Learning",
    title: "Curiosity starts in the classroom",
    description:
      "See how classroom learning gives students the confidence to ask questions and explore new ideas.",
    link: "#academics",
    linkText: "Discover academics",
  },
  {
    category: "Beyond academics",
    title: "Finding your game",
    description:
      "From team sports to individual challenges, students find new ways to grow and work together.",
    link: "#sports",
    linkText: "Explore sports",
  },
];

export default function Blog() {
  return (
    <section className="blog-section section-pad" id="blog">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Stories from Tulas"
            title={
              <>
                Discover more.
                <br />
                <em>Explore Tulas.</em>
              </>
            }
            description="A closer look at learning, campus life and the experiences that help students grow."
          />
        </Reveal>
        <div className="blog-grid">
          {stories.map((story, index) => (
            <Reveal key={story.title} delay={index * 80}>
              <article className="blog-card">
                <span className="blog-category">{story.category}</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <a className="underlined-link" href={story.link}>
                  {story.linkText} <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
