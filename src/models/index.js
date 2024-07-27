const sequelize = require('../config/database');

// Aqui você pode importar e inicializar os modelos
// const User = require('./User')(sequelize, Sequelize.DataTypes);
// const Product = require('./Product')(sequelize, Sequelize.DataTypes);

// Sincronizar modelos com o banco de dados
sequelize.sync();

module.exports = {
  sequelize,
  // Adicione os modelos exportados aqui
  // User,
  // Product,
};
