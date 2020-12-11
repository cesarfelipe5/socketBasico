// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
module.exports = (io, conection) => {

    io.on('connection', async socket => {
        socket.on('join_chat', username => {
            socket.join('chat-pedido-1234');

            io.to('chat-pedido-1234').emit('enter', `${username} entrou na sala chat`);
        });
    });
}
