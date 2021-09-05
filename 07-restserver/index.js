const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.get('/', (req, res ) => {

    res.send('hola mundo');

})


app.listen( port, () => {
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
})