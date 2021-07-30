const { Movie } = require("../models");
const Sequelize = require("sequelize");
const db = require("../models/index");

//Cadastro de Movie
exports.create = (res) => {
  //Validate request
  const { movieId, title, genres } = res;

  //Objeto Movie
  const movie = {
    movieId: movieId,
    title: title,
    genres: genres,
  };

  //Cadastro Movie
  Movie.create(movie)
    .then((data) => {
      console.log("Save -- OK");
    })
    .catch((err) => {
      console.log("Erro ao cadastrar o movie.");
    });
};

//Busca de filmes por titulo
exports.findMoviesTitle = (req, res) => {
  const filter = "%" + req.body.title + "%";

  Movie.findAll({
    where: {
      title: {
        [Sequelize.Op.like]: filter,
      },
    },
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro ao listar o filme.",
      });
    });
};
