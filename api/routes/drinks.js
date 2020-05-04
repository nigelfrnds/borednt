
const router = require('express').Router();
const drinkController = require('../controllers/drinks');
const checkCache = require('../middlewares/check-cache');

router.get('/', checkCache, drinkController.getRandomDrinks);

module.exports = router;