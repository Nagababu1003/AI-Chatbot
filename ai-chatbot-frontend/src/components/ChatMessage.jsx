import { useTypingEffect } from "../hooks/useTypingEffect";

export default function ChatMessage({ text,isUser }) {
    const message=isUser ? text : useTypingEffect(text);
    return(
        <div 
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                marginBottom: 8,
                animation: "slideUp 0.3s",
            }}
        >
            <div style={{
                maxWidth: "70%",
                padding: "10px 14px",
                borderRadius: 16,
                background: isUser ? "var(--user)" : "var(--ai)",
                color: isUser ? "white" : "var(--text)",
            }}
            >
                {message}
              </div>
        </div>
    );
}