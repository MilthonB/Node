const { response, request } = require('express');
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const ctrl = {};

ctrl.usuariosGet = (req=request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API-controlador',
        query
    });
}

ctrl.usuariosPost = async( req, res=response ) => {

    const { nombre, correo, password, rol  } = req.body

    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo  existe

    // const existeEmail = await Usuario.findOne({correo});
    // if( existeEmail ){
    //     return res.status(400).json({
    //         msg: 'Ese correo ya fue tomado'
    //     })
    // }



    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    //Guardar en la BD
    await usuario.save()

    res.json({
        msg:'Post API - controlador',
        usuario
    })
}

ctrl.usuariosPut = ( req = request, res=response ) => {
    const id = req.params.id;

    res.json({
        msg:'Put API - controlador',
        id
    })
}

ctrl.usuariosPatch = ( req, res=response ) => {
    res.json({
        msg:'patch API - controlador'
    })
}

ctrl.usuariosDelete = ( req, res=response ) => {
    res.json({
        msg:' delete API - controlador'
    })
}



module.exports = ctrl;