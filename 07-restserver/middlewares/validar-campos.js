const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');


const validarCampos = ( req, res, next) => {

    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({errores});
    }


    next();

}

const validarEmail = async( correo = "") => {

    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail ){

        throw new Error(`Ese correo ${correo} ya fue tomado`);
    
    }

}


module.exports = {
    validarCampos,
    validarEmail
}