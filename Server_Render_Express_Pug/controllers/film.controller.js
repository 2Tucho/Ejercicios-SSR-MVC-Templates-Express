const fetchFilm = require('../utils/filmFetch.js');

const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        let film = await fetchFilm(title);
        if (film.Response == "True"){
            console.log(film);
            res.status(200).render('film.pug',film);
        } else{
            res.redirect("/")
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const postFilm = async (req, res) => {
    try {
        const title = req.body.title;
        if(title){
           res.redirect("/film/" + title); 
        }
        else{
            res.status(404).redirect("/home")
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

//Ruta post que pille req.body.title y si lo hay haga un res.redirect a /film/ + title

module.exports = {
    getFilm,
    postFilm
}