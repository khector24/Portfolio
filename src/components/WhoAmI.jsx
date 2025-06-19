import "../styles/component-styles/WhoAmI.css";

export default function WhoAmI() {
  return (
    <section className="who-am-i-section section-full-height bg-light">
      <div className="i-am">
        <h2 className="section-heading">Who I Am</h2>
        <p>
          I’m Kenny Hector — a full-stack developer focused on building
          efficient, secure, and scalable web applications. My experience spans
          both internal tools and customer-facing platforms, powered by React,
          Node.js, and AWS.
        </p>
        <p>
          I’m not just a builder — I’m a learner, a leader, and a teammate.
          Whether I’m designing clean interfaces or architecting backend logic,
          I bring strong communication, leadership, and a commitment to getting
          things done.
        </p>
      </div>
      <div className="who-am-i-image">
        <img
          src="/src/assets/illustrations/undraw_static-website_x3tn.svg"
          alt="Developer working on static website"
          className="who-image"
        />
      </div>
      {/* <img
        src="/src/assets/illustrations/blob.svg"
        alt="blob"
        className="blob-image"
      /> */}
    </section>
  );
}
