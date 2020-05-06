const axios = require('axios');
const { cacheResult } = require('../services/redis');
const SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY;

const fetchPopularSongs = async (cacheKey) => {
    try {
        return 'fill';
    } catch (e) {
        console.log("Error fetching songs: ", e);
        throw e;
    }
}

module.exports = {
    fetchPopularSongs
};