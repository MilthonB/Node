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
    io.emit('recibir-mensaje', chatMensaje.ultimos10);

    //Usar una sala de chat por el id
    socket.join(usuario.id);

    socket.on('disconnect', () => {
        chatMensaje.desconectrarUsuario(usuario.id);
        io.emit('usuarios-activos', chatMensaje.usuariosArr);
    });

    socket.on('enviar-mensaje', ({mensaje,uid}) => {

        if( uid ){
            socket.to(uid).emit('mensaje-privados',{de:usuario.nombre, mensaje});
        }else{
            chatMensaje.enviarMensaje(usuario.id,usuario.nombre,mensaje);
            io.emit('recibir-mensaje',chatMensaje.ultimos10);
        }
    });

    

} 


module.exports = {
    socketController
}