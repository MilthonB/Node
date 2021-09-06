const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos, validarEmail } = require('../middlewares/validar-campos');
const { esRolValido } = require('../middlewares/validar-rol');
const Role = require('../models/role');


const ctrl = require('../controllers/usuarios.controllers');
const route = Router();

route.get('/', ctrl.usuariosGet);

route.put('/:id', ctrl.usuariosPut);

route.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es válido').isEmail(),
    check('correo').custom(validarEmail),
    check('password','El password debe de conterner 6 o más caracteres').isLength({min:6}),
    check('rol').custom( esRolValido ),
    validarCampos
] ,ctrl.usuariosPost);

route.delete('/', ctrl.usuariosDelete);

route.patch('/', ctrl.usuariosPatch);

module.exports = route;