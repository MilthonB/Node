
const { Router } = require('express');
const { cargarArchivo } = require('../controllers/uploads.controller');

const  route = Router();


route.post('/',cargarArchivo)


module.exports = route;