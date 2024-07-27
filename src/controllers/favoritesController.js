// /src/controllers/favoritesController.js
const Favorite = require('../models/favorite');

const getFavoritesByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const favorites = await Favorite.findAll({ where: { userId } });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFavorite = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const newFavorite = await Favorite.create({ userId, productId });
    res.status(201).json({ message: 'Produto adicionado aos favoritos', favorite: newFavorite });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFavorite = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    await Favorite.destroy({ where: { userId, productId } });
    res.json({ message: 'Produto removido dos favoritos' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFavoritesByUserId, addFavorite, removeFavorite };
