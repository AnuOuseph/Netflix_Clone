import { apiKey } from "./constants/constant";
export const originals = `discover/tv?api_key=${apiKey}&with_networks=213`
export const action = `discover/movie?api_key=${apiKey}&with_genres=28`
export const comedy = `discover/movie?api_key=${apiKey}&with_genres=35`
export const horror = `discover/movie?api_key=${apiKey}&with_genres=27`
export const romance = `discover/movie?api_key=${apiKey}&with_genres=10749`
export const documentary = `discover/movie?api_key=${apiKey}&with_genres=99`

// ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',

// HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',

// ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',

// RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',

// Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',