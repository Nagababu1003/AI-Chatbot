
import axios from "axios";

const API = "https://ai-chatbot-58vp.onrender.com/api/chat";

export const sendMessage = (message) =>
  axios.post(API, { message});
