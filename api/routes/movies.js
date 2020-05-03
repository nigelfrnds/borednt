
const router = require('express').Router();
const movieController = require('../controllers/movies');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, movieController.getRandomMovie);

module.exports = router;