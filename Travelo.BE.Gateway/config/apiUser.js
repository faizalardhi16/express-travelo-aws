import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiUser = axios.create({
  baseURL: `http://${process.env.API_USER}:8000/api/v1`,
});

export default apiUser;
