import axios from "axios";

const API = "http://localhost:8080/api/chat";

export const sendMessage = (message) =>
  axios.post(API, { message});

