import "../styles/page-styles/Contact.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact section-full-height bg-light">
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to get in touch, feel free to
        reach out via the contact form below. I look forward to hearing from
        you!
      </p>

      <ContactForm />
    </div>
  );
}
