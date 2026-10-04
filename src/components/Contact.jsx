import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="wrap contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Visit us in Dehradun</span>
          <h2>
            Come see where
            <br />
            <em>possibility grows.</em>
          </h2>
          <p>
            Tulas International School
            <br />
            Dhoolkot, P.O. Selaqui, Chakrata Road
            <br />
            Dehradun-248011, Uttarakhand, India
          </p>
          <div className="contact-actions">
            <a href="tel:+919837983791">Admission helpline: +91 98379 83791</a>
            <a href="tel:01352699444">Landline: 0135-2699444</a>
            <a href="tel:01352699666">0135-2699666</a>
            <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
            <a
              className="underlined-link"
              href="https://maps.google.com/?q=Dhoolkot,+P.O+-+Selaqui,+Chakrata+Road,+Dehradun,+Uttarakhand"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        {submitted ? (
          <p className="contact-success" role="status">
            Thank you. Our admissions team will be in touch.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="eyebrow">Admissions enquiry</span>
            <h3>Tell us about your family</h3>
            <div className="contact-form-row">
              <label>
                Full name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                pattern="[0-9+() -]{7,18}"
                required
              />
            </label>
            <label>
              Message
              <textarea name="message" rows="3" required />
            </label>
            <button className="button button-wine" type="submit">
              Send enquiry <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
        <div className="contact-map">
          <iframe
            title="Map showing Tulas International School in Dehradun"
            src="https://www.google.com/maps?q=Dhoolkot%2C%20P.O%20Selaqui%2C%20Chakrata%20Road%2C%20Dehradun&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
