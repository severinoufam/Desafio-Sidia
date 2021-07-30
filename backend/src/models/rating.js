module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
      "Rating",
      {
        userId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true
        },
        movieId: DataTypes.INTEGER,
        rating: DataTypes.FLOAT,
        timestamp: DataTypes.DOUBLE
      }, {
        timestamps: false,
      }
  );

  return Rating;
};