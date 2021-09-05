const express = require('express')
const hbs = require('hbs');

const app = express();
const port = 8080;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',  (err) => {});

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',
    {
        titulo:'Node.js',
        nombre: 'Samarripa'
    }
    );
})

app.get('/generic', (req, res) => {
    res.render('generic');
})

app.get('/elements', (req, res) => {
    res.render('elements');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/old/404.html')
})

app.listen(port, (req, res) => {
    console.log(`Corriendo en el puerto ${port}`);
})