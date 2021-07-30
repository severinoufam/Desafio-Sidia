const { Movie } = require('../models');
const Sequelize = require('sequelize');
const db = require("../models/index");

//Cadastro de Movie
exports.create = (res) => {

    // Validate request
    const { movieId, title, genres } = res;

    //Objeto Movie
    const movie = {
      movieId: movieId,
      title: title,
      genres: genres
    };

    //Cadastro Movie
    Movie.create(movie)
        .then(data => {
            console.log('Save -- OK');
        })
        .catch(err => {
           console.log("Erro ao cadastrar o movie.")
        });
};

//Busca de filmes por titulo
exports.findMoviesTitle = (req, res) => {

  const filter = '%'+req.params.title+'%'

  Movie.findAll({
    where: {
      title: {
        [Sequelize.Op.like]: filter
      }
    }
  })
      .then(data => {
          res.status(200).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Erro ao listar o filme."
          });
      });
};

//Busca de filmes por ano e genero
exports.findMoviesYearGenres = (req, res) => {

  const year = '%'+req.params.year+'%';
  const genres = '%'+req.params.genres+'%';;

  Movie.findAll({
    where: {
      [Sequelize.Op.and]: {
        genres: {
          [Sequelize.Op.like]: genres
        },
        title: {
          [Sequelize.Op.like]: year
        }
      }
     
    }
  })
      .then(data => {
          res.status(200).send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Erro ao listar o filme."
          });
      });
};

//Busca de filmes com classificação K
exports.findMoviesListTopK = async (req, res) => {


  const topk = req.params.topk;
  const [results] = await db.sequelize.query("Select movies.*, ratings.rating from movies "+
                                                                        "INNER JOIN ratings ON ratings.movie_id = movies.movie_id "+
                                                                        "where ratings.rating BETWEEN 0 and "+topk+" "+
                                                                        "ORDER by ratings.rating desc");

  res.status(200).send(results);

};