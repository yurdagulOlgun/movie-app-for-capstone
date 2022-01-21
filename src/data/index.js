import axios from "axios";
const API_KEY = "2d20344e6f6a87e7e2ad84a103865cd9";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})
export const fetchMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

