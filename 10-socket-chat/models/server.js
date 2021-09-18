const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { coneccionDB } = require('../db/config');
const { socketController } = require('../socket/controllers');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io  = require('socket.io')(this.server);

        this.paths = {
            auth: '/api/auth',
            buscador: '/api/buscador',
            categorias: '/api/categorias',
            producto: '/api/productos',
            uploads: '/api/uploads',
            usuario: '/api/usuarios',
        };

        //Middleware
        this.middleware();

        //Coneccion a la base de datos
        this.DBConeccion();

        //Rutas de mi aplicación
        this.routes();

        //Sockets
        this.sockets();
    }


    middleware() {

        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

        //Directorio publico
        this.app.use(express.static('public'));
    }

    async DBConeccion() {
        await coneccionDB();
    }

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.buscador, require('../routes/buscador.routes'));
        this.app.use(this.paths.categorias, require('../routes/categorias.routes'));
        this.app.use(this.paths.producto, require('../routes/productos.routes'));
        this.app.use(this.paths.uploads, require('../routes/uploads.routes'));
        this.app.use(this.paths.usuario, require('../routes/user.routes'));

    }


    sockets(){
        this.io.on('connection', ( socket ) => socketController(socket,this.io));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto: ${this.port}`);
        });
    }




}


module.exports = Server;