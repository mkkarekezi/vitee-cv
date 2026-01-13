import Link from "next/link";
import "./navigation-component.css";
export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/" className="navigation-links">
        vitee-cv
        <img
          src="/icons/read-cv-logo.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>

      <div className="navigation-wrapper">
        <Link href="/" className="navigation-links">
          web portfolio
          <img
            src="/icons/globe-simple.svg"
            alt=""
            className="navigation-links-icon"
          />
        </Link>
        <Link href="/" className="navigation-links">
          source code
          <img
            src="/icons/github-logo.svg"
            alt=""
            className="navigation-links-icon"
          />
        </Link>
      </div>
    </nav>
  );
}
