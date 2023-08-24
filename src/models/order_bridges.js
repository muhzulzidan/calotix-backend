'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Bridges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_Bridges.init(
    {
      order_id: DataTypes.STRING,
      ticket_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order_Bridges',
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );
  Order_Bridges.removeAttribute('id');
  return Order_Bridges;
};
