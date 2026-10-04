import { useEffect, useState } from "react";
import { navLinks } from "../content.js";
import Brand from "./Brand.jsx";

const desktopLinks = [
  ["About TIS", "#about"],
  ["Academics", "#academics"],
  ["Boarding life", "#campus"],
  ["Beyond academics", "#sports"],
  ["Events", "#visitors"],
  ["Admission", "#contact"],
  ["Mandatory disclosure", "#footer"],
  ["Alumni network", "#voices"],
  ["Quick links", "#footer"],
];

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeMenu(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenu);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeMenu);
    };
  }, [menuOpen]);

  const themeLabel =
    theme === "light" ? "Switch to dark mode" : "Switch to light mode";
  const themeText = theme === "light" ? "Dark" : "Light";

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header className="site-header" id="top">
      <div className="admission-strip">
        <a href="tel:+919837983791">
          ☎ &nbsp; ADMISSIONS HELPLINE NO. +91-9837983791
        </a>
        <a className="strip-enquire" href="#contact">
          Enquire Now
        </a>
      </div>
      <div className="header-inner">
        <Brand />
        <button
          type="button"
          className="theme-toggle topbar-theme-toggle"
          aria-label={themeLabel}
          aria-pressed={theme === "dark"}
          onClick={toggleTheme}
        >
          <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
          <span>{themeText}</span>
        </button>
        <button
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="desktop-nav" aria-label="School navigation">
          {desktopLinks.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <nav
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <a className="apply-rail" href="#contact">
        Apply now <span aria-hidden="true">↓</span>
      </a>
      <div
        className="quick-contact"
        aria-label="Contact Tulas International School"
      >
        <a href="#contact">
          <span aria-hidden="true">▤</span> Enquire Now
        </a>
        <a href="https://wa.me/919837983791" target="_blank" rel="noreferrer">
          <span className="whatsapp-mark" aria-hidden="true">
            W
          </span>{" "}
          WhatsApp
        </a>
        <a href="tel:+919837983791">
          <span aria-hidden="true">☎</span> +91-9837983791
        </a>
      </div>
      <a
        className="whatsapp-float"
        href="https://wa.me/919837983791"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Tulas on WhatsApp"
      >
        W
      </a>
    </header>
  );
}
