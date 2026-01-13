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
      </main>
    </div>
  );
}
