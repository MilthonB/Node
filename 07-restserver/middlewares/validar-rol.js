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

const tieneRole = ( ...resto ) => {

    return ( req, res = response, next ) => {

        if( !req.usuario ){
            return res.status(500).json({
            msg: 'Ocurrio un problema en la validacion del JWT'
            })
        }

        if( !resto.includes(req.usuario.rol) ){
            return res.status(401).json({
                msg : `El servicio necesita uno de estos roles ${resto}`
            })
        }

        next();

    }



}

module.exports = {
    validarRol,
    tieneRole
}