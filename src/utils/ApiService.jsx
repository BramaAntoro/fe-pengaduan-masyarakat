import axios from "axios";

export const ApiService = () => axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 100000
})