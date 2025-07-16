import "../styles/page-styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          I’d love to connect! Whether you have a project in mind, want to
          collaborate, or just say hello — feel free to reach out.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noreferrer"
            >
              @khector24
            </a>
          </div>

          {/* <div className="contact-card">
            <h3>Location</h3>
            <p>Suffern, NY (Open to Remote/Hybrid)</p>
          </div> */}
        </div>

        <p className="contact-note">
          Looking forward to hearing from you and working together!
        </p>
      </div>
    </div>
  );
}
