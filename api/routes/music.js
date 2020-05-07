const router = require('express').Router();
const musicController = require('../controllers/music');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, musicController.getPopularSong);

module.exports = router;