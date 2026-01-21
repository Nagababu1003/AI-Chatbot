import axios from "axios";

const API = "https://ai-chatbot-58vp.onrender.com";

export const sendMessage = async () => {
  try {
    const response = await axios.post(
      API,
      { message: userInput }
    );

    setReply
      (response.data.reply);
  } catch (error) {
    console.error("Chat API error:", error);

    if (error.response) {
      alert("Server error: " + error.response.status);
    } else {
      alert("Network error or server down");
    }
  }
};
