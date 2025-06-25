import "../styles/component-styles/SkillsAndTech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import TechItem from "./TechItem";
import { leadershipPoints, techItems } from "../assets/data";

import CheckIcon from "../assets/icons/check.svg?react";

// Decorative SVGs as components
import PlusIcon from "../assets/illustrations/plus.svg?react";
import TriangleIcon from "../assets/illustrations/triangle.svg?react";
import Blob2Icon from "../assets/illustrations/blob2.svg?react";
import VerticalDotsIcon from "../assets/illustrations/vertical-dots.svg?react";
import VerticalDotsIcon1 from "../assets/illustrations/vertical-dots.svg?react";
import LightningIcon from "../assets/illustrations/lightning-svgrepo-com.svg?react";
import HorizontalDotsIcon2 from "../assets/illustrations/vertical-dots.svg?react";
import HorizontalDotsIcon3 from "../assets/illustrations/vertical-dots.svg?react";
import HorizontalDotsIcon4 from "../assets/illustrations/vertical-dots.svg?react";

export default function SkillsAndTech() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="skills-tech-section section-full-height bg-dark">
      {/* Decorative SVGs */}
      <PlusIcon className="svg-decor plus" />
      <TriangleIcon className="svg-decor triangle" />
      <Blob2Icon className="svg-decor big-blob" />
      <VerticalDotsIcon className="svg-decor vertical-dots" />
      <VerticalDotsIcon1 className="svg-decor vertical-dots1" />
      <LightningIcon className="svg-decor lightning" />
      <HorizontalDotsIcon2 className="svg-decor horizontal-dots1" />
      <HorizontalDotsIcon3 className="svg-decor horizontal-dots2" />
      <HorizontalDotsIcon4 className="svg-decor horizontal-dots3" />

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
              <CheckIcon className="check-icon" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
