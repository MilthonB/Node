
const { crearArchivo } = require('./helpers/mutiplicar')
const yargs = require('./config/yargs');


console.clear();

// console.log(yargs);

let base = yargs.b;

crearArchivo(yargs.b, yargs.l, yargs.h)
        .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
        .catch( err => console.log(err))




