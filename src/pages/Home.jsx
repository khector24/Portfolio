import "../styles/page-styles/Home.css";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhoAmI from "../components/home/WhoAmI";
import WhatIDo from "../components/home/WhatIDo";
import HowIWork from "../components/home/HowIWork";
import SkillsAndTech from "../components/home/SkillsAndTech";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <FeaturedProjects />
      <WhoAmI />
      <WhatIDo />
      <HowIWork />
      <SkillsAndTech />
    </main>
  );
}
