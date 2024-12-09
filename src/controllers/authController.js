const User = require('../models/User');

exports.register = async (req, res) => {
  // Validación de datos de entrada
  const { username, password } = req.body;

  // Verificar que los campos no estén vacíos
  if (!username || !password) {
    return res.status(400).json({ 
      error: 'Username y password son requeridos' 
    });
  }

  // Validar longitud mínima
  if (username.length < 3) {
    return res.status(400).json({ 
      error: 'El username debe tener al menos 3 caracteres' 
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      error: 'La password debe tener al menos 6 caracteres' 
    });
  }

  try {
    const user = User.register(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = User.login(username, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};