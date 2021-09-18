const { Socket } = require("socket.io");
const { comprobarJWT } = require("../middlewares/validar-jwt");
const  { ChatMensaje } = require('../models')

const chatMensaje = new ChatMensaje();


const socketController = async ( socket, io ) => {

    //recibir el token
    const usuario = await comprobarJWT(socket.handshake.headers['x-token']); 
    if( !usuario ){
        socket.disconnect();
    } 

    chatMensaje.conectarUsuaios(usuario); 
    io.emit( 'usuarios-activos', chatMensaje.usuariosArr);

    socket.on('disconnet', () => {
        chatMensaje.desconectrarUsuario(usuario.id);
        socket.emit('usuarios-activos', chatMensaje.usuariosArr);
    });
    

} 


module.exports = {
    socketController
}