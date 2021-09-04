const axios = require('axios');

class Busquedas {

    historial = [];

    constructor() {

    }   

    async ciudad(lugar = "") {
        //Peticion http

        try {

            const peticion = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/mexico.json?access_token=pk.eyJ1IjoiZWwtcGlvbGFzIiwiYSI6ImNrdDU1eHBwOTA1YW8ydnBnZW5pZW5mZmIifQ.h7afGroJajeQKSgzNjy_nQ&limit=5&language=es')
            console.log(peticion.data);
            return []; //retornar los lugares 

        } catch (error) {
            return []; //retornar los lugares 

        }

    }

}



module.exports = Busquedas;