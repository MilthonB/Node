
const { response, request } = require('express');
const { Categoria } = require('../models');

//obtenerCategorias - paginado - total - populate

const obtenerCategorias = async () => {

}

//obtenerCategoria - populate {}
const obtenerCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    const { nombre, estado, usuario } = await Categoria.findById(id).populate('usuario');

    res.json({
        nombre,
        estado,
        usuario: usuario.nombre
    })

}


const crearCategoria = async (req = request, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({ nombre });


    if (categoriaDB) {
        return res.status(400).json({
            msg: `La categoria ${categoriaDB.nombre} ya existe`
        });
    }



    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categoria(data);

    await categoria.save();

    res.status(201).json({
        categoria
    });

}

//actualizarCategoria
const actualizarCategoria = async () => {

}

//borrarCategoria - estado:false
const borrarCategoria = async () => {

}


module.exports = {
    crearCategoria,
    obtenerCategoria
}