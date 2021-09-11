
const { Router } = require('express');
const { check } = require('express-validator');

const { crearCategoria, obtenerCategoria, obtenerCategorias, actualizarCategoria, borrarCategoria } = require('../controllers/categorias.controllers');
const { existeCategoria } = require('../helpers/db-validator');
const { validarJWT, validarCampos, tieneRole } = require('../middlewares');

const route = Router();

//Obtener todas las categorias - Publico
route.get('/',obtenerCategorias);

//Obtener una categoria por id - Publico
route.get('/:id',[
    check('id','No es una ID válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
],obtenerCategoria);


//Cargar categorias - privado -  con un token valido
route.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearCategoria);

//Actualizar categoria - privado - con un token válido
route.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('id','Id no válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
] , actualizarCategoria);

//Borrar una categoria - Admin
route.delete('/:id',[
    validarJWT,
    tieneRole( 'VENTAS_ROLE','ADMIN_ROLE','OTRO_ROLE' ),
    check('id','Id no válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
],borrarCategoria);


module.exports = route