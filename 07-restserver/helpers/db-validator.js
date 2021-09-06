const Role = require('../models/role');
const Usuario = require('../models/usuario');



const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if( !existeRol ){
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const validarEmail = async( correo = "") => {

    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail ){

        throw new Error(`Ese correo ${correo} ya fue tomado`);
    
    }

}


module.exports = {
    esRolValido,
    validarEmail
}