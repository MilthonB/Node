const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {
        };

        //Middleware
        this.middleware();

        //Rutas de mi aplicación
        this.routes();

        //Sockets
        this.sockets();
    }


    middleware() {

        //CORS
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));
    }

  
    routes() {

        

    }

    //Sockets 
    sockets(){
        this.io.on("connection", socket => {

            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', () => {
                console.log('Cliente desconectado');
            })

            socket.on( 'enviar-mensaje', (payload) => {
               
                this.io.emit( 'enviar-mensaje', payload );

            });
        

        })
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        });
    }


}


module.exports = Server;