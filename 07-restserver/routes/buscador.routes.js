

const { Router } = require('express');
const { buscador } = require('../controllers/buscador.controllers');

const route = Router();

route.get('/:coleccion/:termino',buscador)


module.exports = route;
