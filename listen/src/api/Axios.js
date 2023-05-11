import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:6505/",
});

export default instance;
