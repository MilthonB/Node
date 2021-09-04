const axios = require('axios');

class Busquedas {

    historial = [];

    constructor(){

    }

    async ciudad( lugar="" ){
        //Peticion http
        console.log(lugar);

        const peticion =  await axios.get('https://reqres.in/api/users?page=2')
        console.log(peticion.data);

        return []; //retornar los lugares 
    }

}



module.exports = Busquedas;