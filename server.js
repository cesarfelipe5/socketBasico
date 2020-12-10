// importa as configurações
require('dotenv').config();
// Realiza o require do express, http, e socketio
var app = require('express')();
// passa o express para o http-server
var http = require('http').Server(app);
// passa o http-server par ao socketio
var io = require('socket.io')(http);

// cria uma rota para fornecer o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', socket => {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

// inicia o servidor na porta informada
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});