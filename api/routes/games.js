
const router = require('express').Router();
const gameController = require('../controllers/games');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, gameController.getRandomGame);

module.exports = router;