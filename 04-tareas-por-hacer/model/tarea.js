
const { v4: uuid } = require('uuid')


class Tarea {

    id = '';
    desc = '';
    completadaEn = null


    constructor( desc ){
        this.id = uuid()
        this.desc = desc;
        this.completadaEn = null;
    }

}

module.exports = Tarea;