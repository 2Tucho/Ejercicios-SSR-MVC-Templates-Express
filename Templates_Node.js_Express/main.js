const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

// Configuración de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');


//ROUTES
//GET http://localhost:3000/
app.get('/', function (req, res) {
    res.render('index');
});

  //GET http://localhost:3000/about
app.get('/about', function (req, res) {
    res.render('about');
});

//GET http://localhost:3000/location
app.get('/location', function (req, res) {
    res.render('location');
});

//GET http://localhost:3000/mission
app.get('/mission', function (req, res) {
    res.render('mission');
});

//GET http://localhost:3000/contact
app.get('/contact', function (req, res) {
    res.render('contact');
});


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });