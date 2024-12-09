const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

const dbPath = path.join(__dirname, '../../db.json');
const adapter = new FileSync(dbPath);
const db = low(adapter);

// Valores por defecto
db.defaults({ users: [], pokemons: [] }).write();

module.exports = db;