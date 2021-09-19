
import express from "express";



class Server {

    private app;
    private port;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4500;
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: '+this.port);
        });
    }

}

export default Server;