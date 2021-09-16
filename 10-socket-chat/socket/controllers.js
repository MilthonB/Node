const { Socket } = require("socket.io")



const socketController = ( socket = new Socket() ) => {

    console.log('El id es: ',socket.id);


} 


module.exports = {
    socketController
}