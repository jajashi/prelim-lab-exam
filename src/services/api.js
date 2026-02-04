import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export async function fetchUsers() {
  const res = await api.get("/users");
  return res.data;
}

export default api;
