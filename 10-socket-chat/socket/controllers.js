const { Socket } = require("socket.io");
const { comprobarJWT } = require("../middlewares/validar-jwt");



const socketController = async ( socket ) => {

    //recibir el token
    const usuario = await comprobarJWT(socket.handshake.headers['x-token']); 
    if( !usuario ){
        socket.disconnect();
    } 
    console.log('Se conecto: '+usuario.nombre);

} 


module.exports = {
    socketController
}