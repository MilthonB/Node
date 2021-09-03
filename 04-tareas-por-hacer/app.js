require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquire');
const Tarea = require('./model/tarea');

console.clear();

let opt = ''

const main = async () => {

    do{

        
        opt = await inquirerMenu();

        // if( opt !== '0') 
        await pausa();

    }while( opt != '0' );

}

main();