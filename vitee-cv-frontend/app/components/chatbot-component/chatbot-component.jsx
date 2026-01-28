"use client";
import "./chatbot-component.css";
import { useState } from "react";

export function ChatbotComponent() {
  const [sessionId, setSessionId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function uploadResume(file) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://vitee-cv.onrender.com/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setSessionId(data.session_id);
      setMessages([{ role: "bot", text: data.message }]);
    } catch (error) {
      console.error("Upload error:", error);
      setMessages([{ role: "bot", text: "Failed to upload resume" }]);
    }
    setLoading(false);
  }

  async function sendMessage(e) {
    e.preventDefault();
    if (!sessionId || !message.trim()) return;

    const userMsg = message;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("https://vitee-cv.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error processing message" },
      ]);
    }
    setLoading(false);
  }

  async function clearChat() {
    if (sessionId) {
      await fetch(`https://vitee-cv.onrender.com/session/${sessionId}`, {
        method: "DELETE",
      });
    }
    setSessionId(null);
    setMessages([]);
    setMessage("");
  }

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message bot loading">
            <img src="/icons/spinner-gap.svg" alt="" className="loading-icon" />
            <span>loading...</span>
          </div>
        )}
      </div>

      <form className="chatbot-input" onSubmit={sendMessage}>
        <input
          className={`chatbot-input-type ${!sessionId ? "no-resume" : ""}`}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            !sessionId
              ? "First upload resume"
              : "Ask questions about this resume"
          }
          disabled={!sessionId || loading}
        />

        <div className="chatbot-input-wrapper">
          <div className="chatbot-input-wrapper-action">
            <label>
              <img
                src="/icons/paperclip-horizontal.svg"
                alt=""
                className="chatbot-input-action-icon"
              />
              <input
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={(e) =>
                  e.target.files[0] && uploadResume(e.target.files[0])
                }
                disabled={loading}
              />
            </label>

            <button type="button" onClick={clearChat} disabled={loading}>
              <img
                src="/icons/chat-centered-slash.svg"
                alt=""
                className="chatbot-input-action-icon"
              />
            </button>
          </div>

          <button
            type="submit"
            disabled={!sessionId || loading || !message.trim()}
          >
            <img
              src="/icons/arrow-circle-up-fill.svg"
              alt=""
              className="chatbot-input-send-icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
