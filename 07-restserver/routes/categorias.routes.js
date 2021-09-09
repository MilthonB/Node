
const { Router } = require('express');
const { check } = require('express-validator');

const route = Router();

//Obtener todas las categorias
route.get('/', (req, res) => {
    res.json('GEt')
} )


module.exports = route