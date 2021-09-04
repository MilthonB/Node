const { leerInput, inquirerMenu, pausa } = require('./helpers/inquire')





const main = async () => {


    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Buscar ciudad
                break;

            case 2:
                //Historial
                break;
            case 0:
                //Salir
                break;
        }

        await pausa();
    } while (opt != 0);


}


main();