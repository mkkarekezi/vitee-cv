import { ChatbotComponent } from "./components/chatbot-component.jsx";
import { Navigation } from "./components/navigation-component.jsx";
import "./styles/home-route.css";

export default function Home() {
  return (
    <section className="home-route">
      <div className="home-route-wrapper">
        <Navigation />

        <main className="home-route-wrapper-main">
          <ChatbotComponent />
          <div className="home-route-wrapper-main-about">
            <p className="home-route-about-par">
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the
            </p>
            <div className="home-route-wrapper-stats">
              <img
                src="/icons/profiles.svg"
                className="home-route-wrapper-stats-icon"
              />
              <p className="home-route-wrapper-stats-par">
                join 1k + vitee.cv users
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
