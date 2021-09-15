const TicketControl = require("../models/tick-control");


const ticketControl = new TicketControl();


const socketController = (socket) => {

   

    socket.on('enviar-mensaje', (payload, callback) => {

        const nombre = 'Ya puedes ejecutarte';

        callback(nombre);

        socket.broadcast.emit( 'enviar-mensaje', payload );

    });


}

module.exports = {
    socketController
}