require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');



console.clear();

let opt = ''

const main = async () => {

    do{

        opt = await mostrarMenu();
        
        if( opt !== '0') await pausa();

    }while( opt != '0' );

}

main();