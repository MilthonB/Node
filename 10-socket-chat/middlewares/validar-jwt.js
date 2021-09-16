
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


        if( !usuario ){
            return res.status(401).json({
                msg: 'Token no autorizado -  el usuario no existe en la BD'
            })
        }

        if( !usuario.estado ){
            return res.status(401).json({
                msg: 'Token no autorizado -  el estado del usuario es falso'
            })
        }



        req.usuario = usuario;


    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no autorizado'
        })
    }
    next(); 
}

const comprobarJWT = async( token = '') => {

    try {

        if( token < 10 ){
            return null;
        }

        const { id } = jwt.verify(token,process.env.SECRETEKEY);
         
        const usuario = await Usuario.findById(id);

        if( usuario && usuario.estado ){
            return usuario;
        }else{
            return null;
        }
        
    } catch (error) {
        return null;
        
    }

}


module.exports = {
    validarJWT,
    comprobarJWT
}