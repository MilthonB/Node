
const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarIMG, mostrarImg, actualizarIMGCloudinary } = require('../controllers/uploads.controller');
const { existeColecion } = require('../helpers/db-validator');
const { validarCampos, validarImg } = require('../middlewares');

const  route = Router();


route.post('/',[
    validarImg
],cargarArchivo);


route.put('/:coleccion/:id',[
    validarImg,
    check('id','No es un id válido').isMongoId(),
    check('coleccion').custom( c => existeColecion(c,['usuario','producto'])),
    validarCampos
],actualizarIMGCloudinary);

route.get('/:coleccion/:id',[
    check('id','No es un id válido').isMongoId(),
    check('coleccion').custom( c => existeColecion(c,['usuario','producto'])),
    validarCampos
],mostrarImg);


module.exports = route;