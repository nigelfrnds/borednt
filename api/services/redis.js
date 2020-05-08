const redis = require('redis');

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

const redisClient = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
    retry_strategy: () => 1000
});

const cacheResult = (cacheKey, dataType, list) => {
    // all cached data will have [dataType, list] format
    const resultToCache = JSON.stringify([dataType, list]);
    // cache for 1hr
    redisClient.setex(cacheKey, 3600, resultToCache);
}


module.exports = {
    redisClient,
    cacheResult
};
