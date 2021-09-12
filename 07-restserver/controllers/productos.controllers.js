const { response, request } = require("express");
const { Producto } = require("../models");

//obtenerProductos - paginado - total - populate
const obtenerProductos = ( req, res= response ) => {



    res.json('Hola a todos soy todos los pruductos')

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

    res.json({
        nuevo
    })

} 



module.exports = {
    obtenerProductos,
    crearProducto
}