const { buildResponse } = require("../utils");
const { fetchPopularGames } = require('../services/game-db');

const getRandomGame = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularGames = await fetchPopularGames(cacheKey);
       
        const result = buildResponse('games', popularGames);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log("Error getting random movie: ", e);
        return res.status(400).send("An error occurred.")
    }
}

module.exports = {
    getRandomGame
};