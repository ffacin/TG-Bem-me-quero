// /src/services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

const generateAuthToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Credenciais inválidas');
    }

    const token = generateAuthToken(user.id);
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerUser = async (email, password, name) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, name });
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { loginUser, registerUser };
