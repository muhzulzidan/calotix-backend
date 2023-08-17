'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Order_Details',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        ticket_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        order_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        price: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        subtotal: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        timestamps: false, // Tambahkan opsi ini untuk menghilangkan createdAt dan updatedAt
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Details');
  },
};
