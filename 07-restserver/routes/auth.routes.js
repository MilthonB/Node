
const { Router } = require('express');
const { check } = require("express-validator");

const router = Router()

const ctrl = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/login',[
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'El password debe de tener 6 o más caracteres').not().isEmpty(),
    validarCampos
],ctrl.login);


module.exports = router;