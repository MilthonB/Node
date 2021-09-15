const TicketControl = require("../models/tick-control");


const ticketControl = new TicketControl();


const socketController = (socket) => {

   

    socket.on('siguiente-ticket', (payload, callback) => {

        const ticket = ticketControl.siguiente();

        callback(ticket);


    });


}

module.exports = {
    socketController
}