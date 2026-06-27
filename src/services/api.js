import axios from "axios";

import { env } from "@/config/env";

const api = axios.create({
  baseURL: env.API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    return Promise.reject(error);
  }
);

export default api;