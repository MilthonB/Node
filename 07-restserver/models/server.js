const express = require('express');
const cors = require('cors');
const { coneccionDB } = require('../db/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routePath = '/api/usuarios';

        //Middleware
        this.middleware();

        //Coneccion a la base de datos
        this.DBConeccion();

        //Rutas de mi aplicación
        this.routes();
    }


    middleware(){

        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public') );
    }

    async DBConeccion(){
        await coneccionDB();
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