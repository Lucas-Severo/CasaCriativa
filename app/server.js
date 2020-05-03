const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const path = require('path');

nunjucks.configure("views", {
    express: server,
    noCache: true
})

const directory = path.join(__dirname + "/views/public/")

// habilitar uso do req.body
server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(directory)));

const db = require('./db');

server.get("/", (req, res) => {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) {
            return res.status(400).send("Erro no banco de dados");
        }

        const reversedIdeas = [...rows].reverse();

        const lastIdeas = []

        for(let idea of reversedIdeas) {
            if(lastIdeas.length === 3)
                break;
            lastIdeas.push(idea);
        }

        return res.render('index.html', { ideas: lastIdeas });
    });
});

server.get("/ideias", (req, res) => {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) {
            return res.status(400).send("Erro no banco de dados");
        }

        const reversedIdeas = [...rows].reverse();
        return res.render('ideias.html', { ideas: reversedIdeas });
    });
});

server.post("/", (req, res) => {
    //Inserir dados na tabela
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?, ?, ?, ?, ?);`;

    const value = req.body;

    const values = [
        value.image,
        value.title,
        value.category,
        value.description,
        value.link
    ];

    db.run(query, values, function(err) {
        if(err) {
            return res.status(400).send("Erro no banco de dados");
        }

        res.redirect("/ideias");
    });
})

server.listen(3000);