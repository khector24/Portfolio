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

  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Your name"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Your email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        type="text"
        placeholder="Your message"
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
    </form>
  );
}
