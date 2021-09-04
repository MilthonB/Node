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

    get paramsWeather() {
        return {
            appid : process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
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

    async climaLugar(lat="", lon="") {

        try {
            const intace = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    lat, 
                    lon,
                    ...this.paramsWeather
                } 
            });
    
            const peticion = await intace.get();
            const { weather, main } = peticion.data;

            return {
                desc: weather[0].description,
                max: main.temp_max,
                min: main.temp_min,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);            
        }

    }

}



module.exports = Busquedas;