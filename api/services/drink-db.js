const axios = require('axios');
const { cacheResult } = require('../services/redis');
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const API_FETCH_LIMIT = 10;

const fetchRandomDrink = async (url) => {
    try {
        const apiRequest = await axios({
            "method":"GET",
            "url": url });
        const data = apiRequest.data;
        const result = data.drinks[0];

        return result;
    } catch (e) {
        console.log('Error fetching random drink: ', e);
        throw e;
    }
}

const fetchPopularDrinks = async (cacheKey) => {
    try {
        const apiRequests = [];
        // array to 10 random drinks
        for (let i=0; i<API_FETCH_LIMIT; i++) {
            apiRequests.push(baseUrl);
        }

        // parallelize api calls
        const results = await Promise.all(
            apiRequests.map(url => fetchRandomDrink(url))
        );

        cacheResult(cacheKey, 'drinks', results);
        return results;
    } catch (e) {
        console.log("Error fetching popular drinks: ", e);
        throw e;
    }
}

module.exports = {
    fetchPopularDrinks
};