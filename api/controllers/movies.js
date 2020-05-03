const { buildResponse } = require("../utils");
const { fetchPopularMovies } = require('../services/movie-db');

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