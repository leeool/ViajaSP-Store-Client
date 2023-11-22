import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dark-hose-lion.cyclic.app",
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
