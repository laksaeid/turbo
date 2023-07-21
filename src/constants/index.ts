import axios from "axios";
const baseURL = "http://localhost:3000/todo/";
export const instance = axios.create({ baseURL });
