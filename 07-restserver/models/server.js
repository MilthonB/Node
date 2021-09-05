const express = require('express');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middleware
        this.middleware();

        //Rutas de mi aplicación
        this.routes();
    }


    middleware(){
        //Directorio publico
        this.app.use( express.static('public') )
    }

    routes(){

        this.app.get('/api', ( req, res ) => {
            res.json({
                msg: 'get API'
            });
        });

        this.app.put('/api', ( req, res ) => {
            res.json({
                msg: 'put API'
            });
        });

        this.app.post('/api', ( req, res ) => {
            res.json({
                msg: 'post API'
            });
        });

        this.app.delete('/api', ( req, res ) => {
            res.json({
                msg: 'delete API'
            });
        });

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        });
    }


}


module.exports = Server;