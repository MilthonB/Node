const { green, red } = require("colors");
const Tarea = require("./tarea");


class Tareas {

    _listado = {}

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })



    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoTareas() {

        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completadaEn } = tarea;
            const estado = (completadaEn)
                ? 'Completado'.green
                : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`)

        })

    }

    listadoCompleto() {

        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completadaEn } = tarea;
            if (completadaEn) {
                console.log(`${idx} ${desc} :: ${completadaEn}`)
            }

        })
    }


    listadoPendiente(){
        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completadaEn } = tarea;
            if (!completadaEn) {
                console.log(`${idx} ${desc} :: ${'Pendiente'.red}`)
            }

        })
    }

    borrarTarea( id='' ){

        delete this._listado[id];

    }

    

}


module.exports = Tareas;
