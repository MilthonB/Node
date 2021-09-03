require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquire');
const Tarea = require('./model/tarea');
const Tareas = require('./model/tareas');

console.clear();

let opt = ''
const tareas = new Tareas();

const main = async () => {

    const tareasDB = leerDB();

    if( tareasDB ){

        //cargar tareas de la lectura del archivo json en db 
        tareas.cargarTareasFromArray( tareasDB );
        // console.log(tareasDB)

    }


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
                tareas.listadoCompleto();
                break;
        }

        guardarDB( tareas.listadoArr )

        // if( opt !== '0') 
        await pausa();

    }while( opt != '0' );

}

main();