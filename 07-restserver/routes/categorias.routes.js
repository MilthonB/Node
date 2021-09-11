
const { Router } = require('express');
const { check } = require('express-validator');

const { crearCategoria, obtenerCategoria, obtenerCategorias, actualizarCategoria } = require('../controllers/categorias.controllers');
const { existeCategoria } = require('../helpers/db-validator');
const { validarJWT, validarCampos } = require('../middlewares');

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
    check('id','Id no válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
] , actualizarCategoria);

//Borrar una categoria - Admin
route.delete('/:id', (req, res) => {
    res.json('Delete')
});


module.exports = route