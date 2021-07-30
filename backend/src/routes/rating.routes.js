const express = require('express')
const router  = express.Router();
const fs  = require('fs');
const readable = fs.createReadStream('./src/files/ratings.csv')
const readLine = require('readline');
const ratingRoutes = require("../controllers/rating.controller");

router.get('/create-ratings', async (req, res) => {

  const ratingsLine =  readLine.createInterface({
    input: readable,
    // output: process.stdout
  })

  for await (let line of ratingsLine) {
    
      const rating = line.split(",");
      
      await ratingRoutes.create({
        userId: rating[0],
        movieId: rating[1],
        rating: rating[2]?rating[2]:'',
        timestamp: rating[3]?rating[3]:''
      })

  }

  console.log('>>>>>>>>>>>>>>>>finalizou <<<<<<==')
  return res.status(200).send()

})

module.exports = router
