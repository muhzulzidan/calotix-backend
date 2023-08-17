'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_Access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_Access.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role_Access',
      timestamps: false,
    }
  );
  return Role_Access;
};
