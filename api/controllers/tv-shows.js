const axios = require('axios');
const { buildResponse } = require('../utils');
const { cacheResult } = require('../services/redis');

const API_KEY = process.env.MOVIES_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

const fetchPopularShows = async (cacheKey) => {
    try {
        const url = `${baseUrl}&api_key=${API_KEY}`;
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

const getRandomShow = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularShows = await fetchPopularShows(cacheKey);

        const result = buildResponse('tv-shows', popularShows);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log('Error getting random tv show: ', e);
        return res.status(400).send('An error occurred.');
    }
}

module.exports = {
    getRandomShow
};