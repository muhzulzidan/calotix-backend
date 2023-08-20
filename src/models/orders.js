'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      payment_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};