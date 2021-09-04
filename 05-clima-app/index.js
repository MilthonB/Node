const { leerInput, inquirerMenu, pausa, listadoLugares } = require('./helpers/inquire');
const Busquedas = require('./models/busquedas');





const main = async () => {


    let opt;
    const busqueda = new Busquedas();

    const { historial } = busqueda.leerDB();

    if( historial ){
        busqueda.agregarArrayHistorial( historial );
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Buscar ciudad

                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ')

                //Buscar los lugares
                const lugares = await busqueda.ciudad(termino)

                //Seleccionar el luebas
                const ids = await listadoLugares(lugares)
                if( ids === '0' ) continue;
                
                const { nombre, lat, lng } = lugares.find(lugar => lugar.id === ids);

                //se manda el nombre del lugar y se alamacena 
                busqueda.guardarHistorial(nombre);

                //Datos del clima
                const { desc, min, max, temp } = await busqueda.climaLugar(lng, lat);

                console.clear();
                //mostar los resultados
                console.log('\nInformación de la ciuda\n'.green);
                console.log('Ciudad:', nombre);
                console.log('Lng:', lng);
                console.log('Lat:', lat);
                console.log('Temperaturas: ',temp);
                console.log('Mínima:',max);
                console.log('Máxima:',min);
                console.log('Como está el cielo:',desc.green);
                break;

            case 2:
                //Historial
                busqueda.historial.forEach( (lugar, i) => {
                    const idx = `${ i +1 }.`;
                    console.log(`${idx} ${lugar.green}`);
                })

                busqueda.leerDB();

                break;
            case 0:
                //Salir
                break;
        }

        await pausa();
    } while (opt != 0);


}


main();