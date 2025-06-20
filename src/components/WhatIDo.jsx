import "../styles/component-styles/WhatIDo.css";

export default function WhatIDo() {
  return (
    <section className="what-i-do-section section-full-height bg-dark">
      <div className="do-card left-card" data-aos="fade-up-right">
        <h3>I Build</h3>
        <p>
          Scalable systems, portfolio sites, internal dashboards, and real-time
          tools that solve real-world problems.
        </p>
        <a href="/portfolio" className="sub-cta">
          See Examples →
        </a>
      </div>
      <div className="do-card right-card" data-aos="fade-up-left">
        <h3>I Design</h3>
        <p>
          Interfaces with clarity and purpose — intuitive for users, flexible
          for teams, and clean under the hood.
        </p>
        <a href="/portfolio" className="sub-cta">
          See Examples →
        </a>
      </div>
    </section>
  );
}
