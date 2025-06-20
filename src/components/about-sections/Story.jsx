import resumePDF from "../../assets/documents/resume.pdf";

export default function About() {
  return (
    <section className="about">
      <h2 data-aos="fade-down">About Me</h2>

      <p data-aos="fade-up">
        Hi, I'm <strong>Kenny Hector</strong> — a multilingual full-stack
        developer with a passion for building clean, scalable, and impactful web
        applications. I was born in Haiti but have spent most of my life in the
        United States, where I eventually became a proud citizen.
      </p>

      <p data-aos="fade-up" data-aos-delay="100">
        I hold a Bachelor’s degree in Computer Science from Saint Thomas Aquinas
        College and speak three languages fluently. I specialize in developing
        both internal tools and client-facing platforms using React, Node.js,
        AWS, and DynamoDB.
      </p>

      <p data-aos="fade-up" data-aos-delay="200">
        I’m an AWS Certified Solutions Architect and have built tools that
        streamlined operations at Rainbow Ace Hardware and helped client
        businesses like Splash Zone Aquatics gain traction before launch. My
        development style combines solid backend logic with intuitive front-end
        design, always prioritizing performance and user experience.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        Beyond coding, I’m passionate about basketball, photography, and sports
        in general — especially football and soccer. I love solving problems,
        whether it's debugging tricky code or analyzing plays on the court. I'm
        constantly learning and growing, both as a developer and as a person.
      </p>

      <p data-aos="fade-up" data-aos-delay="400">
        If you’re looking for someone who’s committed to excellence, enjoys
        collaboration, and brings real-world experience to the table, I’d love
        to connect. Reach me at{" "}
        <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>.
      </p>

      <a
        href={resumePDF}
        target="_blank"
        rel="noreferrer"
        className="resume-button"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        View Resume (PDF)
      </a>
    </section>
  );
}
