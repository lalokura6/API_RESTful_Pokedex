const db = require('../config/database');

class Pokemon {
  static create(data, trainerId) {
    const newPokemon = {
      id: Date.now(),
      ...data,
      trainerId,
      createdAt: new Date()
    };

    db.get('pokemons').push(newPokemon).write();
    return newPokemon;
  }

  static findAll() {
    return db.get('pokemons').value();
  }

  static findById(id) {
    return db.get('pokemons').find({ id: parseInt(id) }).value();
  }

  static findByTrainerId(trainerId) {
    return db.get('pokemons').filter({ trainerId }).value();
  }

  static update(id, data, trainerId) {
    const pokemon = this.findById(id);
    
    if (!pokemon || pokemon.trainerId !== trainerId) {
      throw new Error('Pokémon no encontrado o no autorizado');
    }

    const updatedPokemon = { ...pokemon, ...data };
    
    db.get('pokemons')
      .find({ id: parseInt(id) })
      .assign(updatedPokemon)
      .write();

    return updatedPokemon;
  }

  static delete(id, trainerId) {
    const pokemon = this.findById(id);
    
    if (!pokemon || pokemon.trainerId !== trainerId) {
      throw new Error('Pokémon no encontrado o no autorizado');
    }

    db.get('pokemons').remove({ id: parseInt(id) }).write();
    return true;
  }
}

module.exports = Pokemon;