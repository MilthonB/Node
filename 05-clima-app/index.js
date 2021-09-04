const { leerInput, inquirerMenu, pausa } = require('./helpers/inquire');
const Busquedas = require('./models/busquedas');





const main = async () => {


    let opt;
    const busqueda = new Busquedas();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Buscar ciudad
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                // console.log(lugar); 
                await busqueda.ciudad( lugar )

                //Buscar los lugares
                // / Seleccionar el luebas
                //Datos del clima
                //mostar los resultados
                console.log('\nInformación de la ciuda\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperaturas:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
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