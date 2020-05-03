const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const path = require('path');

nunjucks.configure("views", {
    express: server,
    noCache: true
})

const directory = path.join(__dirname + "/views/public/")

server.use(express.static(path.join(directory)));

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor, soluta corrupti porro placeat iste, enim quasi similique voluptatibus commodi, recusandae numquam delectus cumque tempora reprehenderit harum architecto temporibus expedita.",
        url: "https://rocketseat.com.br"
    }
]

server.get("/", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    const lastIdeas = []

    for(let idea of reversedIdeas) {
        if(lastIdeas.length === 3)
            break;
        lastIdeas.push(idea);
    }

    return res.render('index.html', { ideas: lastIdeas });
});

server.get("/ideias", (req, res) => {
    const reversedIdeas = [...ideas].reverse();
    return res.render('ideias.html', { ideas: reversedIdeas });
});

server.listen(3000);