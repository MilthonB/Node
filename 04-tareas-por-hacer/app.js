require('colors');

const { inquirerMenu } = require('./helpers/inquire');

console.clear();

let opt = ''

const main = async () => {

    do{

        opt = await inquirerMenu();

        // if( opt !== '0') await pausa();

    }while( opt != '0' );

}

main();