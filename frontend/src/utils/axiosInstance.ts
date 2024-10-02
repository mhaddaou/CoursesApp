import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api", 
  headers: {
    "Content-Type": "application/json", 
  },
  timeout: 10000, // Timeout set to 10 seconds
});

// Adding a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
