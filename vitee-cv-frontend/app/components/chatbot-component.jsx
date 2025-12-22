"use client";
import "../styles/chatbot-component.css";
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
      const res = await fetch(" http://127.0.0.1:8000/upload", {
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
      const res = await fetch(" http://127.0.0.1:8000/chat", {
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
      await fetch(` http://127.0.0.1:8000/session/${sessionId}`, {
        method: "DELETE",
      });
    }
    setSessionId(null);
    setMessages([]);
    setMessage("");
  }

  return (
    <div className="chatbot-component">
      <h1>hi, there i’m vitee your ai hiring assist</h1>

      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <form className="chatbot-component-chat" onSubmit={sendMessage}>
        <label className="chatbot-component-chat-upload">
          <img src="/icons/paperclip.svg" alt="" />
          upload resume
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
        <button
          type="button"
          className="chatbot-component-chat-newchat"
          onClick={clearChat}
          disabled={loading}
        >
          <img src="/icons/chat.svg" alt="" />
          new chat
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="what do you want to know about this resume"
          disabled={!sessionId || loading}
        />
        <button
          type="submit"
          disabled={!sessionId || loading || !message.trim()}
        >
          <img src="/icons/arrow-circle-up-fill.svg" alt="" />
        </button>
      </form>
    </div>
  );
}
