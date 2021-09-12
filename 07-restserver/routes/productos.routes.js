const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProductos, crearProducto, obtenerProducto, actualizarProducto } = require('../controllers/productos.controllers');
const { existeProducto } = require('../helpers/db-validator');
const { validarJWT, validarCampos } = require('../middlewares');


const route = Router();


//Obtener todos los productos activos - publico - populate
route.get('/', obtenerProductos);


//Obtener una producto por id - Publico
route.get('/:id',[
    validarJWT,
    check('id','El id no es válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], obtenerProducto)

//Guardar categorias - privado -  con un token valido
route.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','El id de la categoria no es válido').isMongoId(),
    validarCampos
],crearProducto)

//Actualizar producto - token valido
route.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','El id de la categoria no es válido').isMongoId(),
    check('id','El id no es válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], actualizarProducto)


// router.delete()

module.exports = route;

