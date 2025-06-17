export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, feel free to
        reach out via the contact form below. I look forward to hearing from
        you!
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
