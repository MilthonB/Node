
const { crearArchivo } = require('./helpers/mutiplicar')
const yargs = require('yargs')
        .option('b', {
                alias: 'base',
                demandOption: true,
                type: 'number'
        })
        .options('l', {
                alias: 'listado',
                type: 'boolean',
                demandOption: true,
                default: false
        })
        .check((argv, option) => {
                if (isNaN(argv.b)) {
                        throw ('La base tiene que se de tipo numero')
                } else {
                        return true;
                }
        })
        .argv;



console.clear();

console.log(yargs);

let base = yargs.b;

crearArchivo(yargs.b, yargs.l)
        .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
        .catch( err => console.log(err))




