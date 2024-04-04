const router = require('express').Router(); // objeto de rutas
const filmController = require('../controllers/film.controller.js'); 

router.get("/:title", filmController.getFilm);
router.post("/", filmController.postFilm)

module.exports = router;