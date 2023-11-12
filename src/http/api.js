import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/laravel_api/api/v1",
});

export default api;
