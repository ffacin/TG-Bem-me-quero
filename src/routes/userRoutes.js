// /src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUserById, updateUser } = require('../controllers/userController');

router.get('/:userId', getUserById);
router.put('/:userId', updateUser);

module.exports = router;
