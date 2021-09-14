const path = require('path');
const fs = require('fs');

const { response, request } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");
const { Usuario, Producto } = require("../models");



const cargarArchivo = async (req, res = response) => {


    //Imagenes
    const nombre = await subirArchivo(req.files, undefined, 'imgs')

    res.status(200).json({ nombre });

}

const actualizarIMG = async (req = request, res = response) => {



    const { coleccion, id } = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuario':
            modelo = await Usuario.findById(id);
            if (!modelo) {
                return res.status(400).json({
                    msg: 'Id no válido'
                })
            }
            break;
        case 'producto':
            modelo = await Producto.findById(id);
    console.log(modelo);

            if (!modelo) {
                return res.status(400).json({
                    msg: 'Id no válido'
                })
            }
            break;
        default:
            return res.status(500).json({
                msg: `La coleccion ${coleccion} no se ha agregado`
            });
    }

    //limpiar img previas
    console.log(modelo.img);
    if( modelo.img ){
        //borrar el path del servidor
        const pathImg = path.join( __dirname, '../uploads', coleccion, modelo.img);
        if(fs.existsSync(pathImg)){
            fs.unlinkSync(pathImg);
        }

    }


    const nombre = await subirArchivo(req.files, undefined, coleccion)

    modelo.img = nombre;

    modelo.save();

    res.status(200).json({
        modelo
    })

}


module.exports = {
    cargarArchivo,
    actualizarIMG
}