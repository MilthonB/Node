const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");
const { googleVerify } = require("../helpers/google-verify");

const ctrl = {}


ctrl.login = async (req, res = response) => {

    const { correo, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });

        //Verificar el correo
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -correo'
            })
        }

        //Verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: falso'
            })
        }

        //Verificar la contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            })
        }



        // /Generar el jwt

        const token = await generarJWT(usuario.id);
        console.log(usuario.id);

        res.json({
            usuario,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrio un error comuniquese con el administrador del backend'
        })
    }


}


ctrl.googleSingIn = async (req, res) => {

    const { id_token } = req.body;

    try {

        const { nombre, correo, img } = await googleVerify( id_token );

        let usuario = await Usuario.findOne({ correo })

        if( !usuario ){
            const data = {
                nombre,
                correo,
                img,
                password: ':P',
                google: true
            }


            usuario = new Usuario(data);
            await usuario.save();

            
        }
        
        const token = await generarJWT(usuario.id);

        if( !usuario.estado ){

            res.status(401).json({
                msg: 'Contacte al administrado, usuario bloqueado'
            });

        }

   
        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Token de Google no válido'
        })
    }



}


module.exports = ctrl;