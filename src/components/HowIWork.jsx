import "../styles/component-styles/HowIWork.css";

export default function HowIWork() {
  return (
    <section className="how-i-work section-full-height bg-light">
      <div className="how-i-work-wrapper">
        <img
          src="/src/assets/illustrations/lightning-svgrepo-com.svg"
          alt="decorative lightning"
          className="svg-decor lightning"
        />
        <img
          src="/src/assets/illustrations/five-circles.svg"
          alt="decorative circles"
          className="svg-decor circles"
        />

        <div className="how-i-work-image">
          <img
            src="/src/assets/illustrations/undraw_programming_65t2.svg"
            alt="Person coding illustration"
            className="how-image"
          />
        </div>

        <div className="how-i-work-text">
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
