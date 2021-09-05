const express = require('express');

const app = express();
const port = 4500;
app.get('/', (req, res ) => {

    res.set('hola mundo');

})


app.listen( port, () => {
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
})