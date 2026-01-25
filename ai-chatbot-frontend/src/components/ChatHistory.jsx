import { useEffect, useRef } from "react";
import "./ChatHistory.css";

const ChatHistory = ({ messages, isTyping }) => {
  const bottomRef = useRef(null);

  // Auto-scroll when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chat-history">
      {messages.length === 0 && (
        <div className="empty-chat">
          Start a conversation 👋
        </div>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${
            msg.sender === "user" ? "user-message" : "ai-message"
          }`}
        >
          <div className="message-bubble">
            {msg.text}
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="chat-message ai-message">
          <div className="message-bubble typing">
            AI is typing<span>.</span><span>.</span><span>.</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatHistory;
