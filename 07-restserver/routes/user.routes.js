const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, validarEmail } = require('../helpers/db-validator');


const ctrl = require('../controllers/usuarios.controllers');
const route = Router();

route.get('/', ctrl.usuariosGet);

route.put('/:id',[
    check('id','No es un id válido').isMongoId(),
    validarCampos
] ,ctrl.usuariosPut);

route.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe de conterner 6 o más caracteres').isLength({min:6}),
    check('correo','El correo no es válido').isEmail(),
    check('correo').custom(validarEmail),
    check('rol').custom( esRolValido ),
    validarCampos
] ,ctrl.usuariosPost);

route.delete('/', ctrl.usuariosDelete);

route.patch('/', ctrl.usuariosPatch);

module.exports = route;