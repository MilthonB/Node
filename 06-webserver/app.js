const express = require('express')
const app = express();
const port = 8080;


app.use( express.static('public') );


app.get('/hola-mundo',  (req, res) => {
  res.send('Hello World')
})

app.get( '*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
 
app.listen( port , (req, res) => {
    console.log(`Corriendo en el puerto ${ port }`);
})