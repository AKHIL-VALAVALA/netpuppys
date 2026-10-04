export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#top"
      aria-label="Tulas International School home"
    >
      <img
        className="brand-logo"
        src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
        alt="Tulas International School"
      />
    </a>
  );
}
