const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./model/database/ws.db');

const create_ideas = require('./model/migrations/create_ideas.js');

db.serialize(() => {
    
    // Criar a tabela
    create_ideas(db).up();

    // Inserir dados na tabela
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?, ?, ?, ?, ?);`;

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        "https://rocketseat.com.br"
    ];

    db.run(query, values, function(err) {
        if(err) return console.log(err);

        console.log(this.lastID);
    });

    // Deletar um dado da tabela
    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
        if(err) return console.log(err);

        console.log("DELETEI", this);
    })

    // Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) return console.log(err);

        console.log(rows);
    });
})