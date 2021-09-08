
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const validarJWT = async( req, res, next ) => {

    const token = req.header('x-token');
    
    if( !token ){
        res.status(401).json({
            msg: 'No se proveyó un token'
        })
    }

    
    try {

        const { id } = jwt.verify(token,process.env.SECRETEKEY);

        const usuario = await Usuario.findById(id);
        
        req.usuario = usuario;


    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no autorizado'
        })
    }
    next();
}


module.exports = {
    validarJWT
}