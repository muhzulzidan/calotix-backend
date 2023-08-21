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
      user_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      total_amount: DataTypes.INTEGER,
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.STRING(20),
        defaultValue: 'PENDING',
      },
    },
    {
      sequelize,
      modelName: 'Orders',
      timestamps: false, // Disable timestamps for the Orders model
    }
  );
  return Orders;
};
