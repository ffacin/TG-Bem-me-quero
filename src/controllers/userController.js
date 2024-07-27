// /src/controllers/userController.js
const User = require('../models/user');

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { email, name } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    user.email = email;
    user.name = name;
    await user.save();
    res.json({ message: 'Informações do usuário atualizadas com sucesso', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById, updateUser };
