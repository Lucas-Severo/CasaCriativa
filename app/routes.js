const express = require('express');
const routes = express.Router();

const IdeaController = require('./controllers/IdeaController');

routes.get("/", IdeaController.index);

routes.get("/ideias", IdeaController.show);

routes.post("/", IdeaController.create);

module.exports = routes;