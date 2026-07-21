import "../../styles/component-styles/home/SkillsAndTech.css";

import { leadershipPoints } from "../../data/aboutData";
import { techGroups } from "../../data/homeData";

import TechItem from "./TechItem.jsx";

import CheckIcon from "../../assets/icons/check.svg?react";
import CodeIcon from "../../assets/icons/code.svg?react";
import LeadershipIcon from "../../assets/icons/leadership.svg?react";

import PlusIcon from "../../assets/illustrations/plus.svg?react";
import TriangleIcon from "../../assets/illustrations/triangle.svg?react";
import Blob2Icon from "../../assets/illustrations/blob2.svg?react";
import VerticalDotsIcon from "../../assets/illustrations/vertical-dots.svg?react";
import LightningIcon from "../../assets/illustrations/lightning-svgrepo-com.svg?react";

export default function SkillsAndTech() {
  return (
    <section className="skills-tech-section bg-dark">
      <PlusIcon className="skills-decor skills-decor-plus" />
      <TriangleIcon className="skills-decor skills-decor-triangle" />
      <Blob2Icon className="skills-decor skills-decor-blob" />
      <LightningIcon className="skills-decor skills-decor-lightning" />

      <VerticalDotsIcon className="skills-decor skills-decor-dots-top" />
      <VerticalDotsIcon className="skills-decor skills-decor-dots-bottom" />

      <div className="skills-tech-wrapper">
        <header className="skills-tech-header" data-aos="fade-up">
          <span className="skills-tech-eyebrow">Skills &amp; Experience</span>

          <h2>The tools I use. The impact I make.</h2>

          <div className="skills-tech-heading-line" />

          <p>
            I combine modern technologies with strong leadership to build
            products, improve workflows, and help teams solve meaningful
            problems.
          </p>
        </header>

        <div className="skills-tech-grid">
          <article
            className="skills-tech-panel technologies-panel"
            data-aos="fade-right"
          >
            <div className="panel-header">
              <div className="panel-icon">
                <CodeIcon />
              </div>

              <div>
                <h3>Technologies</h3>
                <p>
                  The technologies and tools I use to build scalable, reliable
                  applications.
                </p>
              </div>
            </div>

            <div className="tech-groups">
              {techGroups.map((group) => (
                <section className="tech-group" key={group.title}>
                  <h4>{group.title}</h4>

                  <div className="tech-group-grid">
                    {group.items.map((item) => (
                      <TechItem
                        key={item.title}
                        logo={item.logo}
                        title={item.title}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <article
            className="skills-tech-panel leadership-panel"
            data-aos="fade-left"
          >
            <div className="panel-header">
              <div className="panel-icon">
                <LeadershipIcon />
              </div>

              <div>
                <h3>Leadership &amp; Collaboration</h3>
                <p>
                  How I lead, collaborate, and create impact beyond writing
                  code.
                </p>
              </div>
            </div>

            <ul className="leadership-list">
              {leadershipPoints.map((point, index) => (
                <li
                  className="leadership-item"
                  key={point}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <span className="leadership-check">
                    <CheckIcon />
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
