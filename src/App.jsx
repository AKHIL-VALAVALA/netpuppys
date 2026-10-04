import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Academics from "./components/Academics.jsx";
import Activities from "./components/Activities.jsx";
import AdmissionsCTA from "./components/AdmissionsCTA.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Facilities from "./components/Facilities.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyTIS from "./components/WhyTIS.jsx";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("tis-theme");
    return savedTheme || "light";
  });
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("tis-theme", theme);
  }, [theme]);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };
    const handlePointerLeave = () =>
      setCursor((current) => ({ ...current, visible: false }));

    if (!isCoarsePointer) {
      document.body.classList.add("cursor-enabled");
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      document.body.classList.remove("cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        aria-hidden="true"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.visible ? 1 : 0,
        }}
      />
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Contact />
        <Academics />
        <Activities />
        <Facilities />
        <WhyTIS />
        <Testimonials />
        <Blog />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
