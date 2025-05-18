import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-rapidapi-host": import.meta.env.VITE_API_HOST,
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

export default axiosInstance;
