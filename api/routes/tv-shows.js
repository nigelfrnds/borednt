const router = require('express').Router();
const tvShowController = require('../controllers/tv-shows');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, tvShowController.getRandomShow);

module.exports = router;
