import "../styles/page-styles/Home.css";
import Hero from "../components/Hero";
import WhoAmI from "../components/WhoAmI";
import WhatIDo from "../components/WhatIDo";
import HowIWork from "../components/HowIWork";
import SkillsAndTech from "../components/SkillsAndTech";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <WhoAmI />
      <WhatIDo />
      <HowIWork />
      <SkillsAndTech />
    </main>
  );
}
