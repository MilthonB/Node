
import express,{Application} from "express";

import UserRoutes from "../routes/usuarios.routes";



class Server {

    private app:Application;
    private port: string;
    private apiPath = {
        usuarios : '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4500';
       

        this.router();
    }

    router(){
        this.app.use( this.apiPath.usuarios, UserRoutes );
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: '+this.port);
        });
    }

}

export default Server;