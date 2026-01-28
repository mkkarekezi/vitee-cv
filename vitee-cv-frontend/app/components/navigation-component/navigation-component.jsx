import Link from "next/link";
import "./navigation-component.css";
export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/" className="navigation-links">
        <img
          src="/icons/read-cv-logo.svg"
          alt=""
          className="navigation-links-icon"
        />
        vitee-cv
      </Link>
      <div className="navigation-wrapper">
        <Link href="/" className="navigation-links">
          <img
            src="/icons/globe-simple.svg"
            alt=""
            className="navigation-links-icon"
          />
        </Link>
        <Link href="/" className="navigation-links">
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
