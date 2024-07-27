const { Sequelize } = require('sequelize');

// Substitua pelos valores reais do seu banco de dados
const sequelize = new Sequelize('projetoMobile_TG', 'admin', 'banco123', {
  host: 'projeto-tg.cfae0qo0q365.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,  // A porta padrão do MySQL é 3306
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
