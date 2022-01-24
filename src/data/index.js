import axios from "axios";


const API_KEY = "2d20344e6f6a87e7e2ad84a103865cd9";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchSearchMovies = (q) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${q}`)
export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);
export const fetchTrendDayMovies = () => BASE_AXIOS.get(`/trending/all/day?api_key=${API_KEY}`);
export const fetchTrendWeekMovies = () => BASE_AXIOS.get(`/trending/all/week?api_key=${API_KEY}`);