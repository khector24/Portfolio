import "../styles/page-styles/Career.css";
import {
  experienceData,
  engineeringProjectsData,
  educationData,
  certificationData,
} from "../data/data";
import CareerCard from "../components/CareerCard";

export default function Career() {
  return (
    <main className="career-container">
      <h1>Career & Achievements</h1>

      <section className="career-section">
        <h2>Professional Experience</h2>
        <div className="career-list">
          {experienceData.map((item) => (
            <CareerCard key={`${item.company}-${item.title}`} {...item} />
          ))}
        </div>
      </section>

      <section className="career-section">
        <h2>Engineering Projects</h2>
        <div className="career-list">
          {engineeringProjectsData.map((item) => (
            <CareerCard key={`${item.company}-${item.title}`} {...item} />
          ))}
        </div>
      </section>

      <section className="career-section">
        <h2>Education</h2>
        <div className="career-list">
          {educationData.map((item) => (
            <CareerCard key={`${item.company}-${item.title}`} {...item} />
          ))}
        </div>
      </section>

      <section className="career-section">
        <h2>Certifications</h2>
        <div className="career-list">
          {certificationData.map((item) => (
            <CareerCard key={`${item.company}-${item.title}`} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
