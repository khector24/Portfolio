import resumePDF from "../../assets/documents/resume.pdf";

export default function About() {
  return (
    <section className="about">
      <h2 data-aos="fade-down">About Me</h2>

      <p data-aos="fade-up">
        Hi, I'm <strong>Kenny Hector</strong> — a passionate, multilingual
        full-stack developer from Haiti with a background in both internal
        business apps and client-facing websites. I hold a Bachelor’s in
        Computer Science from Saint Thomas Aquinas College and am fluent in
        three languages.
      </p>

      <p data-aos="fade-up" data-aos-delay="100">
        I specialize in building secure, scalable, and user-centric systems
        using technologies like React, Node.js, AWS, and DynamoDB. Whether I'm
        creating delivery trackers or newsletter signup flows, I combine
        technical excellence with problem-solving and leadership experience.
      </p>

      <p data-aos="fade-up" data-aos-delay="200">
        I’m AWS Certified and have developed tools that improved logistics and
        performance at Rainbow Ace Hardware and helped Splash Zone Aquatics gain
        early traction. I enjoy collaborating, optimizing systems, and
        continuously learning new tech.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        Outside of coding, I love hiking, exploring new ideas, and staying
        current with tech trends. I’m always open to connecting, collaborating,
        and solving real-world problems through software.
      </p>

      <p data-aos="fade-up" data-aos-delay="400">
        Let’s connect! Reach me at{" "}
        <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>.
      </p>

      <a href={resumePDF} target="_blank" rel="noreferrer" className="">
        View Resume
      </a>
    </section>
  );
}
