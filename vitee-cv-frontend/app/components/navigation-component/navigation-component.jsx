import Link from "next/link";
import "./navigation-component.css";
export function Navigation() {
  return (
    <nav className="navigation">
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
      <Link href="/" className="navigation-links">
        <img
          src="/icons/palette.svg"
          alt=""
          className="navigation-links-icon"
        />
      </Link>
    </nav>
  );
}
