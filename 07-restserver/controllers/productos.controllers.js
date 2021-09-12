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

const obtenerProducto = async( req = request, res = response )=> {

    //Obtener el id de los params
    const { id } = req.params;

    //obtener el producto
    const producto = await Producto.findById(id).populate('usuario','nombre').populate('categoria','nombre');

    //Si existe obtener los datos y marlos por un 200
    res.status(200).json({
        producto
    })
}


const crearProducto = async ( req = request, res = response) =>{


    //obtener el nombre
    const nombre = req.body.nombre.toUpperCase();
    const categoria = req.body.categoria;

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

const actualizarProducto = async(req = request, res= response) => {

    const {id} = req.params;

    const data  = req.body;

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id; 

    // const data = {
    //     nombre,
    //     usuario : req.usuario._id,
    //     categoria
    // }

    const productoActualizado = await Producto.findByIdAndUpdate(id,data,{new:true});

    res.status(201).json({
        productoActualizado
    })



}

const borrarProducto = (req = request, res = response) => {

    const { id } = req.params;

    const producto = await Producto.findByIdAndUpdate(id,{estado:false},{new:true});

    res.status(200).json({
        producto
    })

}


module.exports = {
    actualizarProducto,
    borrarProducto,
    borrarProducto,
    crearProducto,
    obtenerProducto,
    obtenerProductos,
}