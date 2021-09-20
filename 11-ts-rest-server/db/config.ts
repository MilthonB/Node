
import { Sequelize } from "sequelize";

const conexionDB = async() => {

    try {
        
        const sequelize = new Sequelize('node','root','123',{
            host:'localhost',
            dialect: 'mysql'
        });

        await sequelize.authenticate();
        console.log('Base de datos online');

    } catch (error) {
        throw new Error('Ocurrio un error en la conexion de la base de datos');
    }

} 

export default conexionDB;
