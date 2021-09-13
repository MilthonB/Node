const { response } = require("express");
const path = require('path');


const cargarArchivo = (req, res = response) => {


    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ msg: ' No hay archivo para subir ' });
        return;
    }

    const { archivo } = req.files;
    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[nombreCortado.length - 1];

    const extensionesValidas = ['png', 'jpeg', 'jpg', 'gif'];

    if (!extensionesValidas.includes(extension)) {
        return res.status(400).json({
            msg: `La extensión ${extension} no es permitida, ${extensionesValidas}`
        })
    }


    // uploadPath = path.join(__dirname, '../uploads/' + archivo.name);

    // archivo.mv(uploadPath, (err) => {
    //     if (err) {
    //         return res.status(500).json({ err });
    //     }
    //     res.status(200).json({ msg: 'File uploaded to ' + uploadPath });
    // });
}


module.exports = {
    cargarArchivo
}