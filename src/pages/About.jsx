import { useEffect } from "react";
import "../styles/page-styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Story from "../components/about/Story.jsx";
import Achievements from "../components/about/Achievements.jsx";
import Skills from "../components/about/Skills.jsx";
import FAQ from "../components/about/FAQ.jsx";

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
