// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
module.exports = (io, conection) => {
    const teste = async () => {
        return await conection.select().from('use_usuario').where('usuario_id', 19);
    }

    io.on('connection', async socket => {

        socket.on('chat message', async msg => {


            console.log(await teste());


            socket.emit('chat message', msg);
        });

        socket.on('setUserName', async nome => {

            console.log(nome.userName);

            // socket.emit('chat message', msg);
        });

    });


}
