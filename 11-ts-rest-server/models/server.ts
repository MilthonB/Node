
import express,{Application} from "express";
import cors from "cors";

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
       

        this.middleware();
        this.router();
    }

    middleware(){
        //cors
        this.app.use( cors() );

        //parse json
        this.app.use( express.json() );

        //public folder
        this.app.use( express.static('../public') );

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