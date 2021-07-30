const { Rating } = require('../models');

//Cadastro de Rating
exports.create = (res) => {

    // Validate request
    const { userId, movieId, rating, timestamp } = res;

    //Objeto Rating
    const ratingObject = {
      userId: userId,
      movieId: movieId,
      rating: rating,
      timestamp: timestamp
    };

    //Cadastro Rating
    Rating.create(ratingObject)
        .then(data => {
            console.log('Save -- OK');
        })
        .catch(err => {
           console.log("Erro ao cadastrar o rating.")
        });
};