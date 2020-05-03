const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./model/database/ws.db');

const create_ideas = require('./model/migrations/create_ideas.js');

db.serialize(() => {

    create_ideas(db).up();
});

module.exports = db;