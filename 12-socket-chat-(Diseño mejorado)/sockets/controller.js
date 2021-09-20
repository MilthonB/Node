


const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('enviar-mensaje', (payload, callback) => {

        const nombre = 'Ya puedes ejecutarte';

        callback(nombre);

        socket.broadcast.emit( 'enviar-mensaje', payload );

    });


}

module.exports = {
    socketController
}