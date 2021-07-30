const express = require('express')
const router  = express.Router();
const fs  = require('fs');
const readable = fs.createReadStream('./src/files/movies.csv')
const readLine = require('readline');
const movieRoutes = require("../controllers/movie.controller");

router.get('/create-movies', async (req, res) => {

  const moviesLine =  readLine.createInterface({
    input: readable,
    // output: process.stdout
  })

  for await (let line of moviesLine) {
    
      const movie = line.split(",");
      
      await movieRoutes.create({
        movieId: movie[0],
        title: movie[1]?movie[1]:'',
        genres: movie[2]?movie[2]:''
      })

  }

  console.log('>>>>>>>>>>>>>>>>finalizou <<<<<<==')
  return res.status(200).send()

});

router.get("/:title", movieRoutes.findMoviesTitle);
router.get("/:year/:genres", movieRoutes.findMoviesYearGenres);
router.get("/:topk", movieRoutes.findMoviesListTopK);

module.exports = router
