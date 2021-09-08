const { response } = require("express");



const validarRol = ( req, res = response, next ) => {


    if( !req.usuario ){
        return res.status(500).json({
            msg: 'Ocurrio un problema en la validacion del JWT'
        })
    }

    const { rol, nombre } = req.usuario;

    
    if( rol !== 'ADMIN_ROLE' ){
        return res.status(401).json({
            msg: `${nombre} no cuenta con credenciales de administrador`
        })
    }

    next();

}

module.exports = {
    validarRol
}