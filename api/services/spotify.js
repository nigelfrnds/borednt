const axios = require('axios');
const { cacheResult } = require('../services/redis');
const SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY;