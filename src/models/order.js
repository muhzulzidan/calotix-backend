'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      total_amount: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
      payment_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: false,
    }
  );
  return Order;
};
