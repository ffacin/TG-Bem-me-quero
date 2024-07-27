const express = require('express');
const sequelize = require('./config/database');
const models = require('./models');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parse de JSON
app.use(express.json());

// Testar a rota principal
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Inicializar o servidor
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
  console.log(`Servidor rodando na porta ${port}`);
});
