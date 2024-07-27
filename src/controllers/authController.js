// /src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { Op } = require('sequelize');

const generateAuthToken = (userId) => {
  return jwt.sign({ userId }, 'seu_token_secreto', { expiresIn: '1h' });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = generateAuthToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, name });
    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginUser, registerUser };
