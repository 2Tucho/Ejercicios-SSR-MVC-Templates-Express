require('dotenv').config();

const fetchFilm = async (title = "") => {
        let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.apikey}`)
        let data = await response.json()
        return data;
}

module.exports = fetchFilm

//fetchFilm("Terminator").then(data=>console.log(data))