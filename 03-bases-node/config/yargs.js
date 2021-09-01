const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        desc: 'Es la base de la tablas de multiplicar'
    })
    .options('l', {
        alias: 'listado',
        type: 'boolean',
        demandOption: true,
        desc: 'Muestra la tabla en consola',
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


module.exports = yargs;