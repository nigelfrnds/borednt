const axios = require('axios');
const { cacheResult } = require('../services/redis');
const { truncateText } = require('../utils')

const API_KEY = process.env.YOUTUBE_API_KEY;
const baseUrl = 'https://www.googleapis.com/youtube/v3';
const baseVideoUrl=`${baseUrl}/videos?part=snippet&chart=mostPopular&regionCode=CA&maxResults=50`;
const baseWatchUrl='https://www.youtube.com/watch?v=';

const formatVideoData = (videos) => videos.map(video => {
    const { id, snippet } = video;
    const { title, description, thumbnails } = snippet;

    const result = {
        title,
        desc: truncateText(500, description),
        url: `${baseWatchUrl}${id}`,
        img_url: thumbnails.high.url
    }
    return result;
})

const fetchPopularVideos = async (cacheKey) => {
    try {
        const url = `${baseVideoUrl}&key=${API_KEY}`;
        const apiRequest = await axios.get(url);

        const data = apiRequest.data;
        const videos = data.items;
        const formattedVideos = formatVideoData(videos);

        cacheResult(cacheKey, 'videos', formattedVideos);
        return formattedVideos;
    } catch (e) {
        console.log('Error fetching popular videos', e);
        throw e;
    }
}

module.exports = {
    fetchPopularVideos
};