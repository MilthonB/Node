import { DataTypes } from "sequelize";
import conexionDB from "../db/config" ;


const Usuario = conexionDB.define('Usuario',{
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});


export default Usuario;