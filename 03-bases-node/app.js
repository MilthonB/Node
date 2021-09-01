
const { crearArchivo } = require('./helpers/mutiplicar')

console.clear();

let base = 3;

crearArchivo(base)
        .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
        .catch( err => console.log(err))




