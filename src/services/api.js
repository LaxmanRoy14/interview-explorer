import axios from "axios";

const api = axios.create({
  baseURL: "https://interview-explorer-backend.onrender.com",
});

export default api;