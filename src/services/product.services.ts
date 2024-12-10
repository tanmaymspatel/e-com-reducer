import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getProducts = () => {
  return axios.get(`${apiUrl}/products`);
};
