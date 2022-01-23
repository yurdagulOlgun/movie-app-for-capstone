import axios from "axios";
const API_KEY = "2d20344e6f6a87e7e2ad84a103865cd9";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})


export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);
export const fetchTrendDayMovies = () => BASE_AXIOS.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
export const fetchTrendWeekMovies = () => BASE_AXIOS.get(`/trending/movie/week?api_key=${API_KEY}&page=1`);
