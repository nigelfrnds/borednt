const axios = require('axios');
const { buildResponse } = require("../utils");
const { cacheResult } = require('../services/redis');

const API_KEY = process.env.MOVIES_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1';

const fetchPopularMovies = async (cacheKey) => {
    try {
        const url = `${baseUrl}&api_key=${API_KEY}`;
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

const getRandomMovie = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularMovies = await fetchPopularMovies(cacheKey);
       
        const result = buildResponse('movies', popularMovies);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log("Error getting random movie: ", e);
        return res.status(400).send("An error occurred.")
    }
}

module.exports = {
    getRandomMovie
};