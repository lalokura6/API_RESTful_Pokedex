const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/pokemon', pokemonRoutes);

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});