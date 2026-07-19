import "../../styles/component-styles/home/HowIWork.css";

export default function HowIWork() {
  return (
    <section className="how-i-work section-full-height bg-light">
      <div className="how-i-work-wrapper">
        {/* Decorative SVGs */}
        <img
          src="/src/assets/illustrations/lightning-svgrepo-com.svg"
          alt=""
          className="svg-decor lightning"
        />
        <img
          src="/illustrations/five-circles.svg"
          alt=""
          className="svg-decor circles"
        />
        <img src="/illustrations/plus.svg" alt="" className="svg-decor plus" />
        <img
          src="/illustrations/triangle.svg"
          alt=""
          className="svg-decor triangle"
        />

        <img
          src="/illustrations/blob2.svg"
          alt=""
          className="svg-decor big-blob"
        />
        <img
          src="/illustrations/vertical-dots.svg"
          alt=""
          className="svg-decor vertical-dots"
        />
        <img
          src="/illustrations/vertical-dots.svg"
          alt=""
          className="svg-decor horizontal-dots1"
        />
        <img
          src="/illustrations/vertical-dots.svg"
          alt=""
          className="svg-decor horizontal-dots2"
        />

        <div className="how-i-work-image" data-aos="zoom-in">
          <img
            src="/illustrations/undraw_programming_65t2.svg"
            alt="Person coding illustration"
            className="how-image"
          />
        </div>

        <div className="how-i-work-text" data-aos="fade-left">
          <h2 className="section-heading">How I Work</h2>
          <p>
            I believe in shipping fast, refactoring often, and learning always.
            I'm adaptable, proactive, and collaborative — unafraid to lead when
            needed, always ready to pitch in where it counts.
          </p>
          <p>
            Whether flying solo or working cross-functionally, I rely on clean
            code, strong fundamentals, and a constant drive to improve.
          </p>
        </div>
      </div>
    </section>
  );
}
