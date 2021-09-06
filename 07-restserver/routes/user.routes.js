const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');


const ctrl = require('../controllers/usuarios.controllers');
const route = Router();

route.get('/', ctrl.usuariosGet);

route.put('/:id', ctrl.usuariosPut);

route.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es válido').isEmail(),
    check('password','El password debe de conterner 6 o más caracteres').isLength({min:6}),
    check('rol').custom( async(rol = '') => {
        const existeRol = await Role.findOne({rol});
        if( !existeRol ){
            throw new Error(`El rol ${rol} no está registrado en la BD`);
        }
    }),
    validarCampos
] ,ctrl.usuariosPost);

route.delete('/', ctrl.usuariosDelete);

route.patch('/', ctrl.usuariosPatch);

module.exports = route;