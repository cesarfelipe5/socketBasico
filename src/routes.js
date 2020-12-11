// importa a classe Router
const { Router } = require('express');

const path = require('path');
// // importa os middlewares
// const { authenticate } = require('./Middlewares/passport');

// inicia o Router
const routes = Router();

// cria uma rota para fornecer o arquivo index.html
routes.get('/', (req, res) => res.redirect('/index'));

// cria uma rota para fornecer o arquivo index.html
routes.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

// /**
//  * Rotas sem autenticação
//  */
// // rotas do controller de Autenticacao
// routes.post('/login', Autenticacao.login);
// routes.get('/validate_code/:usuario_id/:code', PasswordReset.validate_recovery_code);

// /**
//  * Rotas com autenticação
//  */
// routes.use(authenticate());

// routes.post('/timer/stop', Timer.stop);
// routes.get('/timer/etapas/:produto_id', Timer.etapas);

// exporta as rotas
module.exports = routes;