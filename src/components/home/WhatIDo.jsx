import { Link } from "react-router-dom";

import "../../styles/component-styles/home/WhatIDo.css";

export default function WhatIDo() {
  return (
    <section className="what-i-do-section section-full-height bg-dark">
      <div className="what-i-do-wrapper">
        <div className="what-i-do-header" data-aos="fade-up">
          <h2>What I Do</h2>
        </div>

        <div className="what-i-do-split">
          <article className="do-card do-card-left" data-aos="fade-up-right">
            <h3>I Build</h3>

            <p>
              Responsive applications, REST APIs, internal tools, and data
              platforms using React, Node.js, Express, databases, and AWS.
            </p>

            <Link to="/portfolio" className="sub-cta">
              Explore My Projects
            </Link>
          </article>

          <article className="do-card do-card-right" data-aos="fade-up-left">
            <h3>I Design</h3>

            <p>
              Clear, responsive interfaces that make complex features and
              information easier for people to understand and use.
            </p>

            <a
              href="https://regionlore.com/"
              target="_blank"
              rel="noreferrer"
              className="sub-cta"
            >
              See RegionLore
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
