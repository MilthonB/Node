

const DBValidator = require('./db-validator');
const GenerarJWT = require('./generar-jwt');
const GoogleVerify = require('./google-verify');
const SubirArchivo = require('./subir-archivo');


module.exports = {
    ...DBValidator,
    ...GenerarJWT,
    ...GoogleVerify,
    ...SubirArchivo,
}