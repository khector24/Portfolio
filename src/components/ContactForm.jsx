import { useState } from "react";
import "../styles/component-styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Sudmitted ${formData.name} ${formData.email} ${formData.message}`
    );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        aria-label="Name"
      />

      <input
        type="email"
        placeholder="Your email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        aria-label="Email"
      />

      <textarea
        placeholder="Your message"
        name="message"
        id="message"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        required
        aria-label="Message"
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
