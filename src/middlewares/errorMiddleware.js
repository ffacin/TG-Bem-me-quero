// /src/middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
};

module.exports = errorMiddleware;
