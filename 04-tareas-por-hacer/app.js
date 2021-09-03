require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquire');
const Tarea = require('./model/tarea');
const Tareas = require('./model/tareas');

console.clear();

let opt = ''
const tareas = new Tareas();

const main = async () => {

    do{

        //Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opciones
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc )
                break;

            case '2':
                console.log(tareas.listadoArr)
                break;
        }

        guardarDB( tareas.listadoArr )

        // if( opt !== '0') 
        await pausa();

    }while( opt != '0' );

}

main();