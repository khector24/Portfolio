import "../styles/component-styles/SkillsAndTech.css";

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
    { logo: gitLogo, label: "Git" },
    { logo: postmanLogo, label: "Postman" },
    { logo: visualStudioLogo, label: "VS Code" },
  ];

  return (
    <section className="skills-tech-section section-full-height bg-dark">
      <div className="tech-container">
        <h2 className="section-sub-heading">Skills & Technologies</h2>
        <p className="tech-subtitle">
          From frontend to backend, here's what I use to build responsive,
          scalable, and impactful applications.
        </p>
        <div className="logo-grid">
          {techItems.map(({ logo, label }) => (
            <div key={label} className="tech-item">
              <img src={logo} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h2 className="section-sub-heading">Leadership & Collaboration</h2>
        <ul className="skill-list">
          <li>
            Led a 25+ person team while overseeing day-to-day store operations
          </li>
          <li>Delivered hands-on mentorship and onboarding for new hires</li>
          <li>Provided excellent customer support and issue resolution</li>
          <li>
            Identified operational inefficiencies and built internal apps to
            solve them
          </li>
          <li>
            Collaborated with stakeholders to design custom software solutions
          </li>
          <li>
            Balanced technical project execution with retail management duties
          </li>
          <li>
            Demonstrated initiative in launching client-facing and internal
            tools
          </li>
          <li>
            Maintained a culture of learning, innovation, and customer-first
            service
          </li>
        </ul>
      </div>
    </section>
  );
}
