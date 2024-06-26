//Require statements
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = //Introducir key de https://home.openweathermap.org/ entre comillas

//Middlewares
app.use(express.static('public')); //Permite que se publique en el navegador la carpeta con ficheros estáticos
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


//Routes
app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city; //City es el nombre del input, así que se trae ese valor
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${Math.round((weather.main.temp-32)*5/9)} celsius degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})