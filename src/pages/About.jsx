import { useEffect } from "react";
import "../styles/page-styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Story from "../components/about-sections/Story.jsx";
import Achievements from "../components/about-sections/Acheivements.jsx";
import Skills from "../components/about-sections/Skills.jsx";
import FAQ from "../components/about-sections/FAQ.jsx";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="about-container">
      <Story />
      <Achievements />
      <Skills />
      <FAQ />
    </main>
  );
}
