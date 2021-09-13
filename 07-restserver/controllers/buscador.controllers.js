const { request, response } = require("express");
const { ObjectId } = require('mongoose').Types;
const { Usuario } = require('../models')

const colecciones = [
    'usuarios',
    'categorias',
    'productos',
    'roles'
]

const buscarUsuario = async (termino = "", res = response) => {

    // Se puede buscar usuarios por:
    // ID
    // Nombre
    // Correo

    const esValidoId = ObjectId.isValid(termino);

    if (esValidoId) {
        const usuario = await Usuario.findById(termino);
        return res.status(200).json({
            usuario: (usuario) ? [usuario] : []
        })
    }

    const regex = new RegExp(termino, 'i')// busqueda insensible omite mayusculas y minusculas 

    const usuario = await Usuario.find({
        $or: [{ nombre: regex }, { correo: regex }],
        $and: [{ estado: true }]
    })

    res.json({ result: usuario })


}



const buscador = (req = request, res = response) => {

    const { coleccion, termino } = req.params;

    // Verificar si  la coleccion pertenece a las colecciones que tengo registradas al momento

    if (!colecciones.includes(coleccion)) {
        return res.status(400).json({
            msg: `La coleccion ${coleccion} no pertenece a ${colecciones}`
        });
    }

    switch (coleccion) {
        case 'usuarios':
            buscarUsuario(termino, res);
            break;
        case 'categorias':
            buscarUsuario(termino, res);
            break;
        case 'productos':
            buscarUsuario(termino, res);
            break;

        default:
            res.status(500).json({
                msg: 'El administrador no ha agregado esta colección'
            })
            break;
    }

}


module.exports = {
    buscador
}