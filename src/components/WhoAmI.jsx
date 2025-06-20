import "../styles/component-styles/WhoAmI.css";

export default function WhoAmI() {
  return (
    <section className="who-am-i-section section-full-height bg-light">
      <div className="who-am-i-wrapper">
        <img
          src="/src/assets/illustrations/blob1.svg"
          alt="decorative blob"
          className="blob-image top-left"
        />
        <img
          src="/src/assets/illustrations/blob2.svg"
          alt="decorative blob"
          className="blob-image bottom-right"
        />

        <div className="i-am" data-aos="fade-up-right">
          <h2 className="section-heading">Who I Am</h2>

          <p>
            I’m Kenny Hector — a full-stack developer focused on building
            efficient, secure, and scalable web applications. I was born in
            Haiti but have spent most of my life in the United States, where I
            eventually became a proud citizen.
          </p>

          <p>
            I hold a Bachelor’s degree in Computer Science from Saint Thomas
            Aquinas College and speak three languages fluently. My experience
            spans both internal tools and customer-facing platforms, powered by
            React, Node.js, and AWS.
          </p>

          <p>
            I’m not just a builder — I’m a learner, a leader, and a teammate.
            Whether I’m designing clean interfaces or architecting backend
            logic, I bring strong communication, leadership, and a commitment to
            getting things done.
          </p>

          <p>
            Outside of coding, I’m passionate about basketball, photography, and
            sports in general — especially football and soccer. I love solving
            problems, whether it’s debugging code or analyzing plays on the
            court.
          </p>
        </div>

        <div className="who-am-i-image" data-aos="fade-up-left">
          <img
            src="/src/assets/illustrations/undraw_static-website_x3tn.svg"
            alt="Developer working on static website"
            className="who-image"
          />
        </div>
      </div>
    </section>
  );
}
