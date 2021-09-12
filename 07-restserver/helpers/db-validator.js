const { Categoria, Producto } = require('../models');
const Role = require('../models/role');
const Usuario = require('../models/usuario');



const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if( !existeRol ){
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const validarEmail = async( correo = "") => {

    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail ){

        throw new Error(`Ese correo ${correo} ya fue tomado`);
    
    }

}

const validoId = async ( id = "" ) => {
    
    const existeId = await Usuario.findById( id );
    if( !existeId ){
        throw new Error(`El id ${id} no es valido`);
    }

}


const existeCategoria = async( id = '')=> {

    
    const existeIdCat = await Categoria.findById( id );
    
    if( !existeIdCat ){
        throw new Error(`El id ${id} no es valido`);
    }
    
}

existeProducto = async( id = '') => {


    const existeProducto = await Producto.findById(id);
    if(!existeProducto){
        throw new Error(` El id ${id} no es válido `)
    }
}

module.exports = {
    esRolValido,
    validarEmail,
    validoId,
    existeCategoria,
    existeProducto
}