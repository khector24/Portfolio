import "../../styles/component-styles/home/HowIWork.css";

import ProgrammingIllustration from "../../assets/illustrations/undraw_programming_65t2.svg";

// Decorative SVGs
import LightningIcon from "../../assets/illustrations/lightning-svgrepo-com.svg?react";
import FiveCirclesIcon from "../../assets/illustrations/five-circles.svg?react";
import PlusIcon from "../../assets/illustrations/plus.svg?react";
import TriangleIcon from "../../assets/illustrations/triangle.svg?react";
import Blob2Icon from "../../assets/illustrations/blob2.svg?react";
import VerticalDotsIcon from "../../assets/illustrations/vertical-dots.svg?react";

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the problem, the people it affects, and what a successful solution needs to accomplish.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I break the problem into manageable pieces and build a working solution with clear, maintainable code.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "I test, gather feedback, and refine the experience, performance, and structure through steady iteration.",
  },
];

export default function HowIWork() {
  return (
    <section className="how-i-work section-full-height bg-light">
      {/* Decorative SVGs */}
      <LightningIcon
        className="how-work-decor how-work-lightning"
        aria-hidden="true"
      />

      <FiveCirclesIcon
        className="how-work-decor how-work-circles"
        aria-hidden="true"
      />

      <PlusIcon className="how-work-decor how-work-plus" aria-hidden="true" />

      <TriangleIcon
        className="how-work-decor how-work-triangle"
        aria-hidden="true"
      />

      <Blob2Icon className="how-work-decor how-work-blob" aria-hidden="true" />

      <VerticalDotsIcon
        className="how-work-decor how-work-vertical-dots"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="how-work-decor how-work-horizontal-dots-one"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="how-work-decor how-work-horizontal-dots-two"
        aria-hidden="true"
      />

      <div className="how-i-work-wrapper">
        <div className="how-i-work-image" data-aos="zoom-in">
          <img
            src={ProgrammingIllustration}
            alt="Developer working at a computer"
            className="how-image"
          />
        </div>

        <div className="how-i-work-content" data-aos="fade-left">
          <div className="how-i-work-heading">
            <h2 className="section-heading">How I Work</h2>

            <p className="how-i-work-intro">
              I approach development as an iterative process: understand the
              problem, build a practical solution, and keep improving it.
            </p>
          </div>

          <div className="workflow-list">
            {workflowSteps.map(({ number, title, description }, index) => (
              <article
                className="workflow-step"
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="workflow-number" aria-hidden="true">
                  {number}
                </span>

                <div className="workflow-step-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
