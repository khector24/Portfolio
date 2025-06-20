import "../styles/component-styles/Skills.css";

import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import awsLogo from "../assets/logos/aws.svg";
import javaLogo from "../assets/logos/java.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import gitLogo from "../assets/logos/git.svg";
import expressLogo from "../assets/logos/express-js.svg";
import postmanLogo from "../assets/logos/postman.svg";
import visualStudioLogo from "../assets/logos/visual-studio-code.svg";

export default function SkillsAndTech() {
  const techItems = [
    { logo: reactLogo, label: "React" },
    { logo: nodeLogo, label: "Node.js" },
    { logo: expressLogo, label: "Express" },
    { logo: awsLogo, label: "AWS" },
    { logo: javaLogo, label: "Java" },
    { logo: mysqlLogo, label: "MySQL" },
    { logo: htmlLogo, label: "HTML5" },
    { logo: cssLogo, label: "CSS3" },
    { logo: gitLogo, label: "Git & GitHub" },
    { logo: postmanLogo, label: "Postman" },
    { logo: visualStudioLogo, label: "VS Code" },
  ];

  return (
    <section className="skills-section section-full-height bg-dark">
      <div className="tech-stack-container">
        <div className="skills-content">
          <div className="logo-grid">
            <h2 className="section-heading" data-aos="fade-up">
              Skills & Technologies
            </h2>
            <p
              className="tech-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              From frontend to backend, here's what I use to build responsive,
              scalable, and impactful applications.
            </p>
            {techItems.map(({ logo, label }, index) => (
              <div
                key={label}
                className="tech-item"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <img src={logo} alt={label} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div
            className="skill-category"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3>Leadership & Collaboration</h3>
            <ul className="skill-list">
              <li>Team Leadership (25+ staff)</li>
              <li>Client Collaboration</li>
              <li>Project Management</li>
              <li>Retail & Operations Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
