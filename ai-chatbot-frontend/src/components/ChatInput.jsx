export default function ChatInput({ onSend, loading }) {
  return (
    <form onSubmit={onSend} style={{ display: "flex", gap: 8 }}>
      <input
        required
        placeholder="Ask something..."
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #0b0b0b",
        }}
      />
      <button
        disabled={loading}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
}
