// /src/routes/favoritesRoutes.js
const express = require('express');
const router = express.Router();
const { getFavoritesByUserId, addFavorite, removeFavorite } = require('../controllers/favoritesController');

router.get('/:userId', getFavoritesByUserId);
router.post('/add', addFavorite);
router.post('/remove', removeFavorite);

module.exports = router;
