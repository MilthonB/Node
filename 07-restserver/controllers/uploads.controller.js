const { response, request } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");



const cargarArchivo = async(req, res = response) => {


    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ msg: ' No hay archivo para subir ' });
        return;
    }

    //Imagenes
    const nombre = await subirArchivo(req.files,undefined,'imgs')
  
    res.status(200).json({nombre});

}

const actualizarIMG = (req=request, res=response) => {

    const { coleccion, id } = req.params;

    res.json({
        coleccion,
        id
    })



}


module.exports = {
    cargarArchivo,
    actualizarIMG
}