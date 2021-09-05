const { Router } = require('express');

const ctrl = require('../controllers/usuarios.controllers');
const route = Router();

route.get('/', ctrl.usuariosGet);

route.put('/', ctrl.usuariosPut);

route.post('/', ctrl.usuariosPost);

route.delete('/', ctrl.usuariosDelete);

route.patch('/', ctrl.usuariosPatch);

module.exports = route;