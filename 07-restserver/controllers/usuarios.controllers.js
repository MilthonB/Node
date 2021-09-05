const { response, request } = require('express')

const ctrl = {};

ctrl.usuariosGet = (req=request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API-controlador',
        query
    });
}

ctrl.usuariosPost = ( req, res=response ) => {

    const body = req.body
    res.json({
        msg:'Post API - controlador',
        body
    })
}

ctrl.usuariosPut = ( req = request, res=response ) => {
    const id = req.params.id;

    res.json({
        msg:'Put API - controlador',
        id
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