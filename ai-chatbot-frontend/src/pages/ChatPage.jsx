import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import TypingIndicator from "../components/TypingIndicator";
import ThemeToggle from "../components/ThemeToggle";
import { sendMessage } from "../services/chatApi";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    e.target.reset();

    setMessages((m) => [...m, { text, isUser: true }]);
    setLoading(true);

    const res = await sendMessage(text);
    setMessages((m) => [...m, { text: res.data.reply, isUser: false }]);

    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: 600, background: "var(--card)", padding: 56, borderRadius: 22, boxShadow: "0 4px 8px rgba(0,0,0,0.5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Naga's Chatbot</h3>
          <ThemeToggle />
        </div>

        <div style={{ height: 380, overflowY: "auto", marginBottom: 20, marginTop: 20 }}>
          {messages.map((m, i) => (
            <ChatMessage key={i} {...m} />
          ))}
          {loading && <TypingIndicator />}
        </div>

        <ChatInput onSend={send} loading={loading} />
      </div>
    </div>
  );
}
