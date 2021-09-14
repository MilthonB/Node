
const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarIMG } = require('../controllers/uploads.controller');
const { existeColecion } = require('../helpers/db-validator');
const { validarCampos } = require('../middlewares');

const  route = Router();


route.post('/',cargarArchivo);


route.put('/:coleccion/:id',[
    check('id','No es un id válido').isMongoId(),
    check('coleccion').custom( c => existeColecion(c,['usuario','producto'])),
    validarCampos
],actualizarIMG);


module.exports = route;