import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000", // Update the baseURL to match your backend's address
});

export default api;
