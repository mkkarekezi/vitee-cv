import "./chatbot-component.css";
export default function ChatbotComponent() {
  return (
    <div className="chatbot-component">
      <header className="chatbot-component-header">
        <img
          src="/icons/vitee.cv-logo-2.svg"
          alt=""
          className="chatbot-component-header-icon"
        />
        <button className="chatbot-component-header-cta">
          <img
            src="/icons/chat.svg"
            alt=""
            className="chatbot-component-header-cta-icon"
          />
          new chat
        </button>
      </header>
      <main className="chatbot-component-main">
        <div className="chatbot-component-main-chat">
          {/* qucik action wrapper */}
          <div className="chatbot-component-main-chat-actions">
            {/* quick actions */}
            <div className="chatbot-component-main-chat-actions-header">
              <img
                src="/icons/person-simple-run.svg"
                alt=""
                className="chatbot-component-main-chat-actions-header-icon"
              />
              <p className="chatbot-component-main-chat-actions-header-par">
                quick actions
              </p>
            </div>
            <button className="chatbot-component-main-chat-actions-action">
              experience level
            </button>
            <button className="chatbot-component-main-chat-actions-action">
              education level
            </button>
            <button className="chatbot-component-main-chat-actions-action">
              spoken languages
            </button>
          </div>
          {/* chat input */}
          <form className="chatbot-component-main-chat-input">
            <input
              type="text"
              id="chatbot-component-main-chat-input-id"
              name="message"
              placeholder="what do you want to know about this resume"
              required
            />
            <button type="submit">
              <img src="/icons/arrow-circle-up-fill.svg" alt="" />
            </button>
          </form>
        </div>
        {/*  */}
      </main>
    </div>
  );
}
