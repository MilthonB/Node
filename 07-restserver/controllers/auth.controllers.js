const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs')

const ctrl = {}


ctrl.login = async ( req, res= response ) => {

    const { correo, password } = req.body;

    try {
        
        const usuario = await Usuario.findOne({correo});
        
        //Verificar el correo
        if(!usuario){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos -correo'
            })
        }
        
        //Verificar si el usuario esta activo
        if(!usuario.estado){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - estado: falso'
            })
        }
        
        //Verificar la contraseña
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if( !validPassword ){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - password'
            })
        }

       

        // /Generar el jwt

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrio un error comuniquese con el administrador del backend'
        })
    }

    res.json({
        msg: 'Controlador del login'
    })

}


module.exports = ctrl;