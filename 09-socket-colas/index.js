require('dotenv').config(); // necesario para usar los env en todo el servidor

const Server = require('./models/server'); // Server 

const server = new Server();//Nueva instancia


server.listen();//Inicializacion del server 
