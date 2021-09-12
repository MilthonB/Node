const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProductos } = require('../controllers/productos.controllers');


const route = Router();


route.get('/', obtenerProductos);


module.exports = route;

