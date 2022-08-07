import axios from "axios";
import { BASE_AXIOS_URL } from "../constants";

const API_KEY = process.env.API_KEY;
const axiosInstance = axios.create({
  baseURL: BASE_AXIOS_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const MOVIE_URL = {
  originals: `/discover/movie?api_key=${API_KEY}&with_network=213`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  movieDetails: (movieId) =>
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  relatedMovies: (movieId) =>
    `/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
};

export default axiosInstance;
