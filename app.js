/**
 * Arquivo responsável por fazer a conexão com o arquivo 'server.js'
 */
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());

/** parse requests of content-type - application/json */
app.use(bodyParser.json());

/** parse requests of content-type - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Pra verificar se a api está em execução */
const index = require("./src/routes/index");
app.use(index);

const movieRoutes = require("./src/routes/movie.routes");
app.use("/api/v1/movies", movieRoutes);

module.exports = app;
