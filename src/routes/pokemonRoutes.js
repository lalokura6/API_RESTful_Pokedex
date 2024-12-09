const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  createPokemon,
  getAllPokemon,
  getPokemonById,
  getMyPokemons,
  updatePokemon,
  deletePokemon
} = require('../controllers/pokemonController');

router.get('/', getAllPokemon);
router.get('/:id', getPokemonById);
router.get('/trainer/mypokemons', authMiddleware, getMyPokemons);
router.post('/', authMiddleware, createPokemon);
router.put('/:id', authMiddleware, updatePokemon);
router.delete('/:id', authMiddleware, deletePokemon);

module.exports = router;
