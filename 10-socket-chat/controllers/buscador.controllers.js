const { request, response } = require("express");
const { ObjectId } = require('mongoose').Types;
const { Usuario, Categoria, Producto } = require('../models')

const colecciones = [
    'usuarios',
    'categorias',
    'productos',
    'roles'
]

const buscarUsuarios = async (termino = "", res = response) => {

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


const buscarCategorias = async (termino = "", res = response) => {

    // Se puede buscar usuarios por:
    // ID
    // Nombre
    // Correo

    const esValidoId = ObjectId.isValid(termino);

    if (esValidoId) {
        const categoria = await Categoria.findById(termino);
        return res.status(200).json({
            categoria: (categoria) ? [categoria] : []
        })
    }

    const regex = new RegExp(termino, 'i')// busqueda insensible omite mayusculas y minusculas 

    const categoria = await Categoria.find({ nombre: regex, estado: true })

    res.json({ result: categoria })


}



const buscarProductos = async (termino = "", res = response) => {

    // Se puede buscar usuarios por:
    // ID
    // Nombre
    // Correo

    
    const esValidoId = ObjectId.isValid(termino);

    if (esValidoId) {
        const producto = await Producto.findById(termino).populate('categoria','nombre');
        return res.status(200).json({
            producto: (producto) ? [producto] : []
        })
    }

    const regex = new RegExp(termino, 'i')// busqueda insensible omite mayusculas y minusculas 

    const producto = await Producto.find({ nombre: regex, estado: true  }).populate('categoria','nombre')

    res.json({ result: producto })


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
            buscarUsuarios(termino, res);
            break;
        case 'categorias':
            buscarCategorias(termino, res);
            break;
        case 'productos':
            buscarProductos(termino, res);
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