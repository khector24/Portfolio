import "../styles/component-styles/TechStack.css";

import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import awsLogo from "../assets/logos/aws.svg";
import javaLogo from "../assets/logos/java.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import gitLogo from "../assets/logos/git.svg";
import expressLogo from "../assets/logos/express-js.svg";
import bootstrapLogo from "../assets/logos/bootstrap.svg";
import postmanLogo from "../assets/logos/postman.svg";
import visualStudioLogo from "../assets/logos/visual-studio-code.svg";

export default function TechStack() {
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
    { logo: bootstrapLogo, label: "Bootstrap" },
    { logo: postmanLogo, label: "Postman" },
    { logo: visualStudioLogo, label: "VS Code" },
  ];

  return (
    <section className="skills-section section-full-height bg-dark">
      <div className="tech-stack-container">
        <h2 className="section-heading" data-aos="fade-up">
          Tech I Use
        </h2>
        <p className="tech-subtitle" data-aos="fade-up" data-aos-delay="100">
          Tools and technologies I rely on to build secure, scalable, and
          responsive applications.
        </p>
        <div className="logo-grid">
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
      </div>
    </section>
  );
}
