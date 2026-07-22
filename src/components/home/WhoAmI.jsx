import "../../styles/component-styles/home/WhoAmI.css";

import Blob1 from "../../assets/illustrations/blob1.svg";
import Blob2 from "../../assets/illustrations/blob2.svg";
import StaticWebsiteIllustration from "../../assets/illustrations/undraw_static-website_x3tn.svg";

export default function WhoAmI() {
  return (
    <section className="who-am-i-section section-full-height bg-light">
      <div className="who-am-i-wrapper">
        <img
          src={Blob1}
          alt="decorative blob"
          className="blob-image top-left"
        />
        <img
          src={Blob2}
          alt="decorative blob"
          className="blob-image bottom-right"
        />

        <div className="i-am" data-aos="fade-up-right">
          <h2 className="section-heading">Who I Am</h2>

          <p>
            I'm Kenny Hector, a full-stack software engineer who enjoys building
            applications that turn complex information into tools people can
            actually use. Whether I'm developing backend services, designing
            intuitive user interfaces, or working with cloud infrastructure, I'm
            motivated by solving problems that make everyday decisions a little
            easier.
          </p>

          <p>
            I earned my Bachelor's degree in Computer Science from St. Thomas
            Aquinas College and am currently pursuing a Master's degree in
            Computer Science at the University of Colorado Boulder. I'm also an
            AWS Certified Solutions Architect and continue to deepen my
            understanding of software engineering and system design.
          </p>

          <p>
            My projects range from business applications to data platforms like
            RegionLore, where I combine public datasets, interactive
            visualizations, and modern web technologies to help people better
            understand places across the United States.
          </p>

          <p>
            Outside of software development, I enjoy basketball, photography,
            and learning about technology, economics, and the systems that shape
            how people live, work, and move. I'm always looking for
            opportunities to learn, improve, and build something meaningful.
          </p>
        </div>
        <div className="who-am-i-image" data-aos="fade-up-left">
          <img
            src={StaticWebsiteIllustration}
            alt="Developer working on static website"
            className="who-image"
          />
        </div>
      </div>
    </section>
  );
}
