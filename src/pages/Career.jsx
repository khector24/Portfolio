import "../styles/page-styles/Career.css";

import {
  experienceData,
  engineeringProjectsData,
  educationData,
  certificationData,
} from "../data/careerData";

import CareerCard from "../components/career/CareerCard";

import BriefcaseIcon from "../assets/icons/briefcase.svg?react";
import CodeIcon from "../assets/icons/code.svg?react";

import PlusIcon from "../assets/illustrations/plus.svg?react";
import TriangleIcon from "../assets/illustrations/triangle.svg?react";
import BlobIcon from "../assets/illustrations/blob2.svg?react";
import VerticalDotsIcon from "../assets/illustrations/vertical-dots.svg?react";

const careerSections = [
  {
    title: "Professional Experience",
    description:
      "Roles where I created measurable technical and operational impact.",
    items: experienceData,
    icon: BriefcaseIcon,
  },
  {
    title: "Engineering Projects",
    description: "Applications and systems I designed and developed.",
    items: engineeringProjectsData,
    icon: CodeIcon,
  },
  {
    title: "Education",
    description: "My academic background and continued technical learning.",
    items: educationData,
    iconType: "education",
  },
  {
    title: "Certifications",
    description: "Professional credentials and technical validation.",
    items: certificationData,
    iconType: "certification",
  },
];

export default function Career() {
  return (
    <main className="career-page">
      <PlusIcon className="career-decor career-decor-plus" aria-hidden="true" />

      <TriangleIcon
        className="career-decor career-decor-triangle"
        aria-hidden="true"
      />

      <BlobIcon
        className="career-decor career-decor-blob-left"
        aria-hidden="true"
      />

      <BlobIcon
        className="career-decor career-decor-blob-right"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="career-decor career-decor-dots-left"
        aria-hidden="true"
      />

      <VerticalDotsIcon
        className="career-decor career-decor-dots-right"
        aria-hidden="true"
      />

      <div className="career-wrapper">
        <header className="career-header" data-aos="fade-up">
          <span className="career-eyebrow">Career</span>

          <h1>Career &amp; Achievements</h1>

          <div className="career-heading-line" />

          <p>
            A concise overview of my professional experience, engineering
            projects, education, and certifications.
          </p>
        </header>

        {careerSections.map((section) => {
          const SectionIcon = section.icon;

          return (
            <section className="career-section" key={section.title}>
              <div className="career-section-header" data-aos="fade-up">
                <span className="career-section-icon" aria-hidden="true">
                  {SectionIcon ? (
                    <SectionIcon />
                  ) : section.iconType === "education" ? (
                    <span className="career-symbol">◇</span>
                  ) : (
                    <span className="career-symbol">✦</span>
                  )}
                </span>

                <div>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
              </div>

              <div className="career-list">
                {section.items.map((item) => (
                  <CareerCard key={`${item.company}-${item.title}`} {...item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
