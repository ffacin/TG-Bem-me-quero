// /src/models/favorite.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const User = require('./user');
const Product = require('./product');

const Favorite = sequelize.define('Favorite', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  }
});

User.hasMany(Favorite, { foreignKey: 'userId' });
Product.hasMany(Favorite, { foreignKey: 'productId' });
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Favorite;
