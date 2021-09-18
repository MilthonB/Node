
//Modelo del mensaje
class Mensajes{
    constructor( uid, nombre, mensaje) {
        this,uid = uid;
        this.nombre = nombre;
        this.mensaje = mensaje;
    }
    
}

//Modelo del chat
class ChatMensajes {

    constructor(){
        this.mensaje = [],
        this.usuario = {};
    }


    get ultimos10(){
        this.mensaje = this.mensaje.splice(0,10);
        return this.mensaje;
    }

    get usuariosArr() {
        return Object.values( this.usuario ); // return un []
    }

    enviarMensaje( uid, nombre, mensaje ){

        this.mensaje.unshift(
            new Mensajes(uid, nombre, mensaje)
        );  
    }


    conectarUsuaios( usuario ) {
        console.log(usuario);
        this.usuario[usuario.id] = usuario;
    }

    desconectrarUsuario( id ) {
        console.log(id);
        delete this.usuario[id];
    }

}



module.exports = ChatMensajes