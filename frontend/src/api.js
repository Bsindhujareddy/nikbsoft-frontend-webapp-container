import axios from "axios";

const API = "http://localhost:5000/api";

export const getMenu = () => axios.get(`${API}/menu`);
export const placeOrder = (data) => axios.post(`${API}/orders`, data);