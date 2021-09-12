const { response, request } = require("express");
const { Producto } = require("../models");

//obtenerProductos - paginado - total - populate
const obtenerProductos = async( req = request, res= response ) => {

    const { limit = 5, desde = 0 } = req.query;
    const query = {estado : true}

    const [ total, productos ] = await Promise.all([

        Producto.countDocuments(query),
        Producto.find(query)
                .skip(Number(desde))
                .limit(Number(limit))
                .populate('usuario','nombre')
                .populate('categoria','nombre')

    ])


    res.status(200).json({
        total,
        productos
    })




}


const crearProducto = async ( req = request, res = response) =>{


    //obtener el nombre
    const { nombre, categoria } = req.body;

    //verificar si ese nombre existe en la base de datos 
    const existeNombre = await Producto.findOne({nombre});

    //Si existe el producto entonces mandas un res status 400
    if( existeNombre ){
        return res.status(400).json({
            msg: 'Este producto ya existe'
        })
    }

    // Preparar la data que se quiere guardar
    const data = {
        nombre,
        usuario: req.usuario._id,
        categoria
    }

    // si no existe hecer un nuevo producto
    const nuevo = new Producto( data );

    //Guardar producto
    nuevo.save();
    //mandar res con los datos del producto agregado

    res.status(201).json({
        nuevo
    })

} 



module.exports = {
    obtenerProductos,
    crearProducto
}