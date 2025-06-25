import "../styles/component-styles/SkillsAndTech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import TechItem from "./TechItem";
import { leadershipPoints, techItems } from "../assets/data";

import checkIcon from "../assets/icons/check.svg";

export default function SkillsAndTech() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="skills-tech-section section-full-height bg-dark">
      <div className="tech-container" data-aos="fade-right">
        <h2 className="section-sub-heading">Technologies</h2>
        <p className="container-subtitle">
          From frontend to backend, here's what I use to build responsive,
          scalable, and impactful applications.
        </p>
        <div className="logo-grid">
          {techItems.map(({ logo, title }) => (
            <TechItem key={title} logo={logo} title={title} />
          ))}
        </div>
      </div>

      <div className="skills-container" data-aos="fade-left">
        <h2 className="section-sub-heading">Leadership & Collaboration</h2>
        <p className="container-subtitle">
          Beyond the code, I lead teams, mentor talent, and build solutions that
          align people, process, and product.
        </p>

        <ul className="skill-list">
          {leadershipPoints.map((text, i) => (
            <li key={i} className="skill-list-item">
              <img src={checkIcon} alt="check" className="check-icon" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
