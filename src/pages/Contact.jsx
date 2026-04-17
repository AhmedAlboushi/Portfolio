import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>

        <p className="contact-subtitle">
          Open to junior backend opportunities.
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <span className="label">Email:</span>
            <span className="value">boushi.ahmed96@gmail.com</span>
          </div>

          <div className="contact-item">
            <span className="label">Phone:</span>
            <span className="value">+90 553 910 4014</span>
          </div>

          <div className="contact-item">
            <span className="label">GitHub:</span>
            <a
              href="https://github.com/AhmedAlboushi"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              AhmedAlboushi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
