
const router = require('express').Router();
const movieController = require('../controllers/movies');

router.get('/', movieController.getRandomMovie);

module.exports = router;