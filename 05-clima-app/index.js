const { leerInput, inquirerMenu, pausa, listadoLugares } = require('./helpers/inquire');
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
                const termino = await leerInput('Ciudad: ')
                
                //Buscar los lugares
                const lugares = await busqueda.ciudad( termino )
                
                //Seleccionar el luebas
                const ids  = await listadoLugares( lugares ) 
                const { nombre, lat, lng } = lugares.find( lugar => lugar.id === ids);
                
                //Datos del clima
                
                //mostar los resultados
                console.log('\nInformación de la ciuda\n'.green);
                console.log('Ciudad:', nombre);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
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