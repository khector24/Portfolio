import "../styles/page-styles/Portfolio.css";
import { featuredProjects } from "../assets/data";
import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <p>Here are a few of my most impactful full-stack projects:</p>
      <div className="projects">
        {featuredProjects.map((proj, i) => (
          <PortfolioCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
}
