'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Regions.init(
    {
      region_city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Regions',
      timestamps: false,
    }
  );
  return Regions;
};
