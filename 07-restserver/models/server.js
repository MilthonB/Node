const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routePath = '/api/usuarios';

        //Middleware
        this.middleware();

        //Rutas de mi aplicación
        this.routes();
    }


    middleware(){

        //CORS
        this.app.use( cors() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){

      this.app.use( this.routePath, require('../routes/user.routes') );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        });
    }


}


module.exports = Server;