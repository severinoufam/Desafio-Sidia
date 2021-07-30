module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      movieId: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },

      title: DataTypes.STRING,
      genres: DataTypes.STRING,
    },

    {
      timestamps: false,
    }
  );

  return Movie;
};
