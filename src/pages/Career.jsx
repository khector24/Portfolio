// src/pages/Career.jsx

import "../styles/page-styles/Career.css";
import { resumeData } from "../assets/data";
import CareerCard from "../components/CareerCard";

export default function Career() {
  return (
    <div className="career-container section-full-height">
      <h1>Career & Achievements</h1>
      <div className="career-list">
        {resumeData.map((job, index) => (
          <CareerCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
