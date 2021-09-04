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
            return peticion.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lat: lugar.center[0], 
                lng: lugar.center[1]
            }));

        } catch (error) {
            return []; //retornar los lugares 

        }

    }

}



module.exports = Busquedas;