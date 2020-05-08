const { buildResponse } = require('../utils');
const {fetchPopularSongs} = require('../services/spotify')
const {getRandomValueFromArray} = require('../utils');

const getRandomSong = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularSongs = await fetchPopularSongs(cacheKey);
        const result = buildResponse('music', popularSongs);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log('Error getting random song: ', e);
        return res.status(400).send('An error occured.');
    }
}

module.exports = {
    getRandomSong
};