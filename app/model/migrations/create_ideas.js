module.exports = function create_ideas(db) {
    return {
        up: () => {
            db.run(`CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT
            );`);
        },

        down: () => {
            db.run(`DROP TABLE IF EXISTS ideas;`);
        }
    }
}