const { response, request } = require('express');
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const ctrl = {};

ctrl.usuariosGet = async (req = request, res = response) => {

    const { limit = 5, desde = 0 } = req.query;
    const query = {estado: true}
    // const usuarios = await Usuario.find()
    //     .skip(Number(desde))
    //     .limit(Number(limit));

    // const total = await Usuario.countDocuments();

    const [total, usuarios] = await Promise.all( // se ejecutan al mismo tiempo y no por separado
        [
            Usuario.countDocuments(query),
            Usuario.find(query)
                .skip(Number(desde))
                .limit(Number(limit))
        ]
    )

    res.json({
        total,
        usuarios
    });
}

ctrl.usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body

    const usuario = new Usuario({ nombre, correo, password, rol });

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en la BD
    await usuario.save()

    res.json(usuario)
}

ctrl.usuariosPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, password, google, ...resto } = req.body;


    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json(usuario)
}

ctrl.usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

ctrl.usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});

    res.json({
        msg: ' delete API - controlador',
        usuario
    })
}



module.exports = ctrl;