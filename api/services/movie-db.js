const axios = require('axios');
const { cacheResult } = require('../services/redis');

const API_KEY = process.env.MOVIES_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';
const baseMovieUrl = `${baseUrl}/movie/popular?language=en-US&page=1`;
const baseTvUrl = `${baseUrl}/tv/popular?language=en-US&page=1`;

const fetchPopularMovies = async (cacheKey) => {
    try {
        const url = `${baseMovieUrl}&api_key=${API_KEY}`;
        const apiRequest = await axios.get(url);

        const data = apiRequest.data;
        const results = data.results;

        cacheResult(cacheKey, 'movies', results);
        return results;
    } catch (e) {
        console.log("Error fetching popular movies: ", e);
        throw e;
    }
}

const fetchPopularShows = async (cacheKey) => {
    try {
        const url = `${baseTvUrl}&api_key=${API_KEY}`;
        const apiRequest = await axios.get(url);

        const data = apiRequest.data;
        const results = data.results;

        cacheResult(cacheKey, 'tv-shows', results);
        return results;
    } catch (e) {
        console.log('Error fetching popular movies: ', e);
        throw e;
    }
}

module.exports = {
    fetchPopularMovies,
    fetchPopularShows
};