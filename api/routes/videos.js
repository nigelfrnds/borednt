const router = require('express').Router();
const videosController = require('../controllers/videos');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, videosController.getRandomVideo);

module.exports = router;