const { buildResponse } = require("../utils");
const { fetchPopularDrinks } = require('../services/drink-db');

const getRandomDrinks = async (req, res) => {
    try {
        const cacheKey = req.baseUrl;
        const popularDrinks = await fetchPopularDrinks(cacheKey);
       
        const result = buildResponse('drinks', popularDrinks);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log("Error getting random drink: ", e);
        return res.status(400).send("An error occurred.")
    }
}

module.exports = {
    getRandomDrinks
};