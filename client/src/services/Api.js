import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/",
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export default api;
