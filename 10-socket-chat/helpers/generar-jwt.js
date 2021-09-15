
const jwt = require('jsonwebtoken')

const generarJWT = (id) => {

    return new Promise((resolve, reject) => {

        const payload = { id };

        jwt.sign(payload, process.env.SECRETEKEY, {
            expiresIn: '4h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Ocurrio un error en jwt');
            } else {
                resolve(token);
            }

        })

    });

}

module.exports = {
    generarJWT
}