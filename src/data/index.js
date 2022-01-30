import axios from "axios";



const API_KEY = "2d20344e6f6a87e7e2ad84a103865cd9";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})




export const fetchSearchMovies = (q) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${q}`)
export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);
export const fetchTrendDayMovies = () => BASE_AXIOS.get(`/trending/all/day?api_key=${API_KEY}`);
export const fetchTrendWeekMovies = () => BASE_AXIOS.get(`/trending/all/week?api_key=${API_KEY}`);
export const fetchPopularMovies = () => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&page=1`);
export const fetchTopRatedMovies = () => BASE_AXIOS.get(`/movie/top_rated?api_key=${API_KEY}&page=1`);
export const fetchDetail = (movieId) => BASE_AXIOS.get(`/movie/${movieId}?api_key=${API_KEY}`);
export const fetchCast = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
export const fetchReviews = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
export const fetchRecommendations = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/recommendations?api_key=${API_KEY}`);
export const fetchSortMovies = (date_to, date_from, genre_id) => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&release_date.lte=${date_to}&release_date.gte=${date_from}&with_genres=${genre_id}`)

