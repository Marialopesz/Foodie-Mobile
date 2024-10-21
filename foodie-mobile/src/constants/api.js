import axios from "axios";

const api = axios.create({
    baseURL: "http://10.11.0.28:3001",
    timeout: 10000
});

export default api;