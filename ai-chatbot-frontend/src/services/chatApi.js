import axios from "axios";

const API = "https://ai-chatbot-58vp.onrender.com";

export const sendMessage = (message) =>
  axios.post(
  "https://ai-chatbot-58vp.onrender.com/api/chat",
  { message }
);

