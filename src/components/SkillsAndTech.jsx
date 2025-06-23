import "../styles/component-styles/SkillsAndTech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
import checkIcon from "../assets/icons/check.svg"; // Add a simple check icon

export default function SkillsAndTech() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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

  const leadershipPoints = [
    "Led a 25+ person team while overseeing day-to-day store operations",
    "Delivered hands-on mentorship and onboarding for new hires",
    "Provided excellent customer support and issue resolution",
    "Identified operational inefficiencies and built internal apps",
    "Collaborated on custom software solutions",
    "Balanced tech execution with retail management",
    "Launched internal tools and client-facing apps",
    "Promoted a culture of innovation and customer-first service",
  ];

  return (
    <section className="skills-tech-section section-full-height bg-dark">
      <div className="tech-container" data-aos="fade-right">
        <h2 className="section-sub-heading">Skills & Technologies</h2>
        <p className="tech-subtitle">
          From frontend to backend, here's what I use to build responsive,
          scalable, and impactful applications.
        </p>
        <div className="logo-grid">
          {techItems.map(({ logo, label }) => (
            <div className="tech-card" key={label} data-aos="zoom-in">
              <img src={logo} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container" data-aos="fade-left">
        <h2 className="section-sub-heading">Leadership & Collaboration</h2>
        <ul className="skill-list">
          {leadershipPoints.map((text, i) => (
            <li key={i} className="skill-list-item" data-aos="fade-up">
              <img src={checkIcon} alt="check" className="check-icon" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
