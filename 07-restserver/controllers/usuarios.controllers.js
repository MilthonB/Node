const { response } = require('express')

const ctrl = {};

ctrl.usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API-controlador'
    });
}

ctrl.usuariosPost = ( req, res=response ) => {
    res.json({
        msg:'Post API - controlador'
    })
}

ctrl.usuariosPut = ( req, res=response ) => {
    res.json({
        msg:'Put API - controlador'
    })
}

ctrl.usuariosPatch = ( req, res=response ) => {
    res.json({
        msg:'patch API - controlador'
    })
}

ctrl.usuariosDelete = ( req, res=response ) => {
    res.json({
        msg:' delete API - controlador'
    })
}



module.exports = ctrl;