import { navLinks } from "../content.js";
import Brand from "./Brand.jsx";

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main wrap">
        <div className="footer-intro">
          <Brand light />
          <p>
            A CBSE co-educational boarding and day school in Dehradun, where
            learning opens up a world of possibilities.
          </p>
          <div className="social-links" aria-label="Social media">
            <a
              href="https://www.facebook.com/tulasinternationalschool"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/tulasinternationalschool/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              ig
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              ▶
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Explore Tulas</h3>
          {navLinks.slice(0, 5).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a href="#campus">
            Virtual tour
          </a>
        </div>
        <div className="footer-links">
          <h3>Useful links</h3>
          <a href="https://tis.edu.in/faq/">FAQ</a>
          <a href="https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf">
            School calendar
          </a>
          <a href="https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf">
            School brochure
          </a>
          <a href="https://tis.fedena.com/">Fedena login</a>
          <a href="#contact">Admissions</a>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {copyrightYear} Tulas International School</span>
        <span>Learning. Leading. Living.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
