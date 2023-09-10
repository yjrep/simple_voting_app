import axios from "axios";

const baseUrl = "http://localhost:3000";
const config = {
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
  },
  timeout: 10000,
};
const request = axios.create(config);

export default request;
