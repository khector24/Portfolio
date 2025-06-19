import { Link } from "react-router-dom";
import "../styles/page-styles/Home.css";
import Hero from "../components/Hero";
import WhoAmI from "../components/WhoAmI";
import WhatIDo from "../components/WhatIDo";
import HowIWork from "../components/HowIWork";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <WhoAmI />
      <WhatIDo />
      <HowIWork />
      <TechStack />
    </main>
  );
}
