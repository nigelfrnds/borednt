const axios = require('axios');
const { cacheResult } = require('../services/redis');


const fetchPopularGames = async (cacheKey) => {
    const GAME_HOST_URL = process.env.GAME_HOST_URL,
          GAME_HOST_KEY = process.env.GAME_HOST_URL;

    try {
        const baseUrl = 'https://rawg-video-games-database.p.rapidapi.com/games';
        const apiRequest = await axios({
            "method":"GET",
            "url": baseUrl,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":GAME_HOST_URL,
            "x-rapidapi-key":GAME_HOST_KEY
            }
            });
        console.log(apiRequest);
        const data = apiRequest.data;
        const results = data.results;

        cacheResult(cacheKey, 'games', results);
        return results;
    } catch (e) {
        console.log("Error fetching popular games: ", e);
        throw e;
    }
}

module.exports = {
    fetchPopularGames
};