import { ChatbotComponent } from "../components/chatbot-component/chatbot-component.jsx";
import { Navigation } from "../components/navigation-component/navigation-component.jsx";
import "./page.css";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <main className="home-wrapper">
        <h1 className="home-wrapper-title">
          <img src="/icons/asterisk.svg" alt="" />
          hi, there i’m vitee cvI'm ready to help you plan, study, bring.
        </h1>
        <ChatbotComponent />

        <p className="home-wrapper-about">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electroni
        </p>
      </main>
    </div>
  );
}
