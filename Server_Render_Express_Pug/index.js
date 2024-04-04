const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config();

const filmRoutes = require("./routes/film.routes.js")

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
//app.use('/film',filmRoutes);

// Configuración de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');


//ROUTES
//GET http://localhost:3000/
app.get('/', function (req, res) {
    res.render('home');
});

// http://localhost:3000/film
app.use('/film',filmRoutes);


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });