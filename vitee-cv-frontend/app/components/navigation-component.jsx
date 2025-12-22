import Link from "next/link";
import "../styles/navigation-component.css";
export function Navigation() {
  return (
    <nav className="navigation">
      <img src="/icons/read-cv-logo.svg" alt="" />

      <div className="navigation-wrapper">
        <img src="/icons/house-simple-fill.svg" alt="" />
        <img src="/icons/user.svg" alt="" />
        <img src="/icons/stack.svg" alt="" />
      </div>

      <img src="/icons/moon.svg" alt="" />
    </nav>
  );
}
