const axios = require('axios');
const { cacheResult } = require('../services/redis');
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const fetchPopularDrinks = async (cacheKey) => {
    try {
        const apiRequest = await axios({
                "method":"GET",
                "url": baseUrl});
        const data = apiRequest.data;
        const results = data.drinks;

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