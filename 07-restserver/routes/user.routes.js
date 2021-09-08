const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, validarEmail, validoId } = require('../helpers/db-validator');


const ctrl = require('../controllers/usuarios.controllers');
const { validarJWT } = require('../middlewares/validar-jwt');
const route = Router();

route.get('/', ctrl.usuariosGet);

route.put('/:id',[
    check('id','No es un id válido').isMongoId(),
    check('id').custom( validoId ),
    check('rol').custom( esRolValido ),
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

route.delete('/:id',[
    validarJWT,
    check('id','No es un id válido').isMongoId(),
    check('id').custom( validoId ),
    validarCampos
] ,ctrl.usuariosDelete);

route.patch('/', ctrl.usuariosPatch);

module.exports = route;