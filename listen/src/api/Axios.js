import axios from "axios";
const instance = axios.create({
  baseURL: "https://listenbackend.onrender.com",
});

export default instance;
