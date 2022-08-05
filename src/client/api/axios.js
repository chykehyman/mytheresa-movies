import axios from "axios";
import { baseAxiosUrl } from "../constants";

const API_KEY = process.env.API_KEY;
const axiosInstance = axios.create({
  baseURL: baseAxiosUrl,
});

export const MOVIE_URL = {
  originals: `/discover/movie?api_key=${API_KEY}&with_network=213`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default axiosInstance;
