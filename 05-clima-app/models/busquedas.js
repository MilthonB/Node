const axios = require('axios');
require('dotenv').config();

class Busquedas {

    historial = [];

    constructor() {

    }

    get paramsMAPBOX() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language': 'es'
        }
    }

    async ciudad(lugar = "") {
        //Peticion http

        try {
            const intace = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMAPBOX
            });

            const peticion = await intace.get();
            console.log(peticion.data);

            return []; //retornar los lugares 

        } catch (error) {
            return []; //retornar los lugares 

        }

    }

}



module.exports = Busquedas;