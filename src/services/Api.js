import axios from 'axios';

const API_KEY = 'f4f004cf00175f9c9d985cec6ba8ee29';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};