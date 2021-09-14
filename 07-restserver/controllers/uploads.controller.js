const { response, request } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");
const { Usuario, Producto } = require("../models");



const cargarArchivo = async (req, res = response) => {


    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ msg: ' No hay archivo para subir ' });
        return;
    }

    //Imagenes
    const nombre = await subirArchivo(req.files, undefined, 'imgs')

    res.status(200).json({ nombre });

}

const actualizarIMG = async(req = request, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ msg: ' No hay archivo para subir ' });
        return;
    }

    const { coleccion, id } = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuario':
            modelo = await Usuario.findById(id);
            break;
        case 'producto':
            modelo = await Producto.findById(id);
            break;
        default:
            return res.status(500).json({
                msg: `La coleccion ${coleccion} no se ha agregado`
            });
    }



    const nombre = await subirArchivo(req.files, undefined, coleccion)

    modelo.img = nombre;

    res.status(200).json({
        modelo
    })



}


module.exports = {
    cargarArchivo,
    actualizarIMG
}