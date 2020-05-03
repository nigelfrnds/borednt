const { buildResponse } = require("../utils");
const { fetchPopularVideos } = require('../services/youtube');

const getRandomVideo = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularMovies = await fetchPopularVideos(cacheKey);

        const result = buildResponse('videos', popularMovies);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log('Error getting random video: ', e);
        return res.status(400).send('An error occured.');
    }
}

module.exports = {
    getRandomVideo
};