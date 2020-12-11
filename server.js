// importa as configurações
require('dotenv').config();
// Realiza o require do express, http, e socketio
const app = require('express')();
// passa o express para o http-server
const http = require('http').Server(app);
// passa o http-server par ao socketio
const io = require('socket.io')(http);

const routes = require('./src/routes');

const socket = require('./src/socket');

const conection = require('./conection');

app.use((req, res, next) => {
    req.io = io;
    return next();
});

socket(io, conection);

app.use(routes);

// inicia o servidor na porta informada
const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
    console.log(`Servidor rodando em: http://192.168.10.88:${PORT}`);
});