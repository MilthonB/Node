

const http = require('http');

// req es lo que esperas 
// res es lo que respondes 
http.createServer( ( req, res  ) => {

    res.write('Hola mundo');// escribiste
    res.end();// terminaste de escribir

}).listen( 8080 );// Esta escuchando por el puerto 8080;

console.log('Escuando en el puerto',8080 );