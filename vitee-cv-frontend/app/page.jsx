import Link from "next/link";
import ChatbotComponent from "./chatbot-component.jsx";
import "./globals.css";
export default function Home() {
  return (
    <section className="home-route">
      <div className="home-route-wrapper">
        <nav className="home-route-wrapper-navigation">
          <div className="home-route-wrapper-navigation-links">
            <img
              src="/icons/vitee.cv-logo.svg"
              className="home-route-wrapper-navigation-links-icon"
            />
            <Link href="#" className="home-route-wrapper-navigation-links-link">
              about vitee
            </Link>
            <Link href="#" className="home-route-wrapper-navigation-links-link">
              starting chatting
            </Link>
          </div>
          <Link href="#" className="home-route-wrapper-navigation-portfolio">
            portfolio
          </Link>
        </nav>

        {/*  */}
        <h1 className="home-route-heading">
          vitee.cv is an ai assistant that is <br />
          ready to help you choose the right
          <br />
          job candidate with easy
        </h1>

        {/*  */}
        <div className="home-route-wrapper-stats">
          <img
            src="/icons/profiles.svg"
            className="home-route-wrapper-stats-icon"
          />
          <p className="home-route-wrapper-stats-par">
            join 1k + vitee.cv users{" "}
          </p>
        </div>
      </div>

      {/*    */}
      <section className="home-route-about">
        <header className="home-route-about-header">
          <h3 className="home-route-about-header-h3">about vitee.cv</h3>
        </header>
        <div className="home-route-about-wrapper">
          <p className="home-route-about-wrapper-par">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            <br />
            <br />
            dummy text ever since the 1500s, when an unknown
            <br />
            <br />
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <Link href="#" className="home-route-about-wrapper-link">
            source code
            <img
              src="/icons/arrow-up-right.svg"
              className="home-route-about-wrapper-link-icon"
            />
          </Link>
        </div>
      </section>

      <ChatbotComponent />

      {/*  */}
      <footer className="home-route-footer">
        <div className="home-route-footer-wrapper">
          <Link href="#" className="home-route-footer-wrapper-link">
            X (Twitter)
          </Link>
          <Link href="#" className="home-route-footer-wrapper-link">
            Facebook
          </Link>
          <Link href="#" className="home-route-footer-wrapper-link">
            Instagram
          </Link>
          <Link href="#" className="home-route-footer-wrapper-link">
            Newsletter
          </Link>
        </div>
        <p className="home-route-footer-par">@copyright vitee.cv 2025</p>
      </footer>
    </section>
  );
}
