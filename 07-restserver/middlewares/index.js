

const ValidarCampos = require('../middlewares/validar-campos');
const ValidarRol = require('../middlewares/validar-rol');
const ValidarJWT  = require('../middlewares/validar-jwt');


module.exports = {
    ...ValidarCampos,
    ...ValidarRol,
    ...ValidarJWT
}