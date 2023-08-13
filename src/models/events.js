'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Events.init(
    {
      headline: DataTypes.STRING,
      artist_name: DataTypes.STRING,
      region_id: DataTypes.INTEGER,
      venue: DataTypes.STRING,
      event_date: DataTypes.STRING,
      times: DataTypes.STRING,
      poster: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Events',
    }
  );
  return Events;
};