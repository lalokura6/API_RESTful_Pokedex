const Pokemon = require('../models/Pokemon');

exports.createPokemon = (req, res) => {
  try {
    const pokemon = Pokemon.create(req.body, req.user.id);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPokemon = (req, res) => {
  const pokemons = Pokemon.findAll();
  res.json(pokemons);
};

exports.getPokemonById = (req, res) => {
  const pokemon = Pokemon.findById(req.params.id);
  
  if (!pokemon) {
    return res.status(404).json({ error: 'Pokémon no encontrado' });
  }

  res.json(pokemon);
};

exports.getMyPokemons = (req, res) => {
  const pokemons = Pokemon.findByTrainerId(req.user.id);
  res.json(pokemons);
};

exports.updatePokemon = (req, res) => {
  try {
    const pokemon = Pokemon.update(req.params.id, req.body, req.user.id);
    res.json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deletePokemon = (req, res) => {
  try {
    Pokemon.delete(req.params.id, req.user.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};