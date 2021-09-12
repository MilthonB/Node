const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProductos, crearProducto } = require('../controllers/productos.controllers');
const { validarJWT, validarCampos } = require('../middlewares');


const route = Router();


//Obtener todos los productos activos - publico - populate
route.get('/', obtenerProductos);


//Guardar categorias - privado -  con un token valido
route.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','El id de la categoria no es válido').isMongoId(),
    validarCampos
],crearProducto)

module.exports = route;

