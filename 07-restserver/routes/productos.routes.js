const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProductos, crearProducto, obtenerProducto, actualizarProducto, borrarProducto } = require('../controllers/productos.controllers');
const { existeProducto, existeCategoria } = require('../helpers/db-validator');
const { validarJWT, validarCampos, validarRol } = require('../middlewares');
const role = require('../models/role');


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
    check('categoria').custom(existeCategoria),
    validarCampos
],crearProducto)

//Actualizar producto - token valido
route.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','El id de la categoria no es válido').isMongoId(),
    check('categoria').custom(existeCategoria),
    check('id','El id no es válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], actualizarProducto)


//Delete cambiar el estado a falso de un producto - el usuario debe de tener persimos de rol
route.delete('/:id',[
    validarJWT,
    validarRol,
    check('id','El id es obligatorio').not().isEmpty(),
    check('id').custom(existeProducto),
    validarCampos
],borrarProducto)

module.exports = route;

