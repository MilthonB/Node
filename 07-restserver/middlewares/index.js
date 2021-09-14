

const ValidarCampos = require('../middlewares/validar-campos');
const ValidarRol = require('../middlewares/validar-rol');
const ValidarJWT  = require('../middlewares/validar-jwt');
const ValidarImgSubir  = require('../middlewares/validar-img-subir');


module.exports = {
    ...ValidarCampos,
    ...ValidarRol,
    ...ValidarJWT,    
    ...ValidarImgSubir,    
}