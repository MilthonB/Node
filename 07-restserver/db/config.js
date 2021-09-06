const mongoose = require('mongoose');


const coneccionDB = async() => {

    try {
        
        await mongoose.connect( process.env.BD_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );

        console.log('Base de datos online');


    } catch (error) {
        throw new Error( 'Error a la hora de iniciar la base de datos')
    }   

}


module.exports = {
    coneccionDB
}