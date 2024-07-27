const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas
router.get('/', productController.getProducts);
router.post('/', productController.upload, productController.createProduct);

// Adicione outras rotas aqui, se necessário

module.exports = router;
