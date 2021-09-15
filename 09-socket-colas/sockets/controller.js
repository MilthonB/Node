const TicketControl = require("../models/tick-control");


const ticketControl = new TicketControl();


const socketController = (socket) => {

   socket.emit('ultimo-ticket', ticketControl.ultimo);

    socket.on('siguiente-ticket', (payload, callback) => {

        const ticket = ticketControl.siguiente();

        callback(ticket);


    });

    socket.on( 'antender-ticket',( {escritorio}, callback ) => {
       
        if( !escritorio ){
            callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.atenderTicked( escritorio );

        if( !ticket ){
            callback({
                ok: false,
                msg: 'Ya no hay tickets pendientes'
            });
        }

        callback({
            ok: true,
            msg: 'Ticket disponible',
            ticket
        });


    });


}

module.exports = {
    socketController
}