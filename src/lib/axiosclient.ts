import axios from "axios";
export const axiosClient = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  headers: {
    "x-api-key": process.env.X_API_KEY,
  },
});