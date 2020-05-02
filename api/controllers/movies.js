const axios = require('axios');
const { getRandomIndex } = require("../utils");

const API_KEY = process.env.MOVIES_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';


const fetchPopularMovies = async () => {
    try {
        const url = `${baseUrl}&api_key=${API_KEY}`;
        const apiRequest = await axios.get(url);

        const data = apiRequest.data;
        const results = data.results;

        return results;
    } catch (e) {
        console.log("Error fetching popular movies: ", e);
        throw e;
    }
}

const getRandomMovie = async (req, res) => {
    try {
        const popularMovies = await fetchPopularMovies();
        const randomIndex = getRandomIndex(popularMovies.length);
        const randomMovie = popularMovies[randomIndex];

        const { title, overview, poster_path } = randomMovie;

        const result = {
            title: title,
            desc: overview,
            img_url: `${imageBaseURL}${poster_path}`
        };

        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log("Error getting random movie: ", e);
        return res.status(400).send("An error occurred.")
    }
}

module.exports = {
    getRandomMovie
};