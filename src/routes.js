// importa a classe Router
const { Router } = require('express');

const path = require('path');

const routes = Router();

routes.get('/', (req, res) => res.redirect('/index'));

routes.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

module.exports = routes;
