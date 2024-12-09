const db = require('../config/database');
const { generateToken } = require('../utils/jwt');
const bcrypt = require('bcryptjs');

class User {
  // Método estático de login
  static login(username, password) {
    // Validar que se proporcionen username y password
    if (!username || !password) {
      throw new Error('Username y password son requeridos');
    }

    // Buscar usuario
    const user = db.get('users')
      .find({ username })
      .value();

    // Verificar si el usuario existe
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar contraseña
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta');
    }

    // Generar token
    return {
      id: user.id,
      username: user.username,
      token: generateToken(user)
    };
  }

  // Método de registro (como estaba antes)
  static register(username, password) {
    const existingUser = db.get('users')
      .find({ username })
      .value();

    if (existingUser) {
      throw new Error('Usuario ya existe');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = {
      id: Date.now(),
      username,
      password: hashedPassword,
      role: 'trainer'
    };

    db.get('users').push(newUser).write();
    
    return {
      id: newUser.id,
      username: newUser.username,
      token: generateToken(newUser)
    };
  }


  static login(username, password) {
    const user = db.get('users')
      .find({ username })
      .value();

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error('Credenciales inválidas');
    }

    return {
      id: user.id,
      username: user.username,
      token: generateToken(user)
    };
  }
}

module.exports = User;