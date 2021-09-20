
import { Sequelize } from "sequelize";


const conexionDB = new Sequelize('node','root','123',{
    host:'localhost',
    dialect: 'mysql'
});



export default conexionDB;
