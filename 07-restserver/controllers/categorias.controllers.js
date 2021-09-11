
const { response, request } = require('express');
const { Categoria } = require('../models');

//obtenerCategorias - paginado - total - populate
const obtenerCategorias = async (req = request, res = response) => {

    const { limit = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, categorias] = await Promise.all([

        Categoria.countDocuments({ query }),
        Categoria.find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            .populate('usuario','nombre')
    ])

    res.status(200).json({
        categorias,
        total
    })

}

//obtenerCategoria - populate {}
const obtenerCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findById(id).populate('usuario','nombre');

    res.json({
        categoria
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
const actualizarCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    const {estado, usuario,...data} = req.body;
    
    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;
    
    

    const categoria = await Categoria.findByIdAndUpdate(id,data, {new: true});

    res.status(201).json({
        categoria
    })

    //Acutalizar el nombre de la categoria 

}

//borrarCategoria - estado:false
const borrarCategoria = async (req = request, res = response) => {

    // solo actualizar el estado a falso
    const { id } = req.params;

    const categoriaEliminar = await Categoria.findByIdAndUpdate(id,{estado:false});

    const usuarios = req.usuario;

    res.json({
        id,
        usuarios,
        categoriaEliminar
    })


}


module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}