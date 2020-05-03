const { buildResponse } = require('../utils');
const { fetchPopularShows } = require('../services/movie-db');

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