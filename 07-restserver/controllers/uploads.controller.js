const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);


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
    if (modelo.img) {
        //borrar el path del servidor
        const pathImg = path.join(__dirname, '../uploads', coleccion, modelo.img);
        if (fs.existsSync(pathImg)) {
            fs.unlinkSync(pathImg);
        }

    }


    const nombre = await subirArchivo(req.files, undefined, coleccion)

    modelo.img = nombre;

    await modelo.save();

    res.status(200).json({
        modelo
    })

}


const actualizarIMGCloudinary = async (req = request, res = response) => {

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


    if( modelo.img ){
        const nombreArr = modelo.img.split('/');
        const [id_img] = nombreArr[nombreArr.length -1 ].split('.');
        cloudinary.uploader.destroy(id_img);

    }


    // console.log(req.files.archivo);

    const { tempFilePath } = req.files.archivo;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    modelo.img = secure_url;

    await modelo.save();

    res.status(200).json({
        modelo
    })

}



const mostrarImg = async (req, res = response) => {

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
    if (modelo.img) {
        //borrar el path del servidor
        const pathImg = path.join(__dirname, '../uploads', coleccion, modelo.img);
        if (fs.existsSync(pathImg)) {
            return res.sendFile(pathImg);
        }

    }

    const pathImg = path.join(__dirname, '../assets/no-image.jpg');
    if (fs.existsSync(pathImg)) {
        return res.sendFile(pathImg);
    }

    res.json({ msg: 'Falta el placeholder' })

}


module.exports = {
    cargarArchivo,
    actualizarIMG,
    mostrarImg,
    actualizarIMGCloudinary
}