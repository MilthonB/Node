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
    }


    middleware() {

        //CORS
        this.app.use(cors());

        //Directorio publico
        this.app.use(express.static('public'));
    }

  
    routes() {

        

    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        });
    }


}


module.exports = Server;