const redisClient = require('../services/redis');
const { buildResponse } = require('../utils');

const checkCache = (req, res, next) => {
    const cacheKey = req.baseUrl;

    redisClient.get(cacheKey, (err, data) => {
        if (err) {
            console.log('cache error: ', err);
            return res.status(500).send("An error occured.");
        }
        
        // matched cache
        if (data != null) {
            console.log('using cache');
            // data stored as strings in redis
            const parsedData = JSON.parse(data);

            // parsed data has [dataType, list] format
            const cachedDataType = parsedData[0];
            const cachedList = parsedData[1];
            // build response based on data type
            const result = buildResponse(cachedDataType, cachedList);

            return res.status(200).send(JSON.stringify(result));
        }

        // if no match
        console.log('not in cache');
        next();
    });
};

module.exports = checkCache;