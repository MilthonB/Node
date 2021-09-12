const { response } = require("express")

//obtenerProductos - paginado - total - populate
const obtenerProductos = ( req, res= response ) => {

    res.json('Hola a todos soy todos los pruductos')

}


module.exports = {
    obtenerProductos
}