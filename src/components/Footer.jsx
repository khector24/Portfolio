import "../styles/component-styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Kenny Hector. All rights reserved.
        </p>
        <p>
          Follow me on{" "}
          <a
            href="https://github.com/khector24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Icons by{" "}
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
}
