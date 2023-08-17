'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Orders',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        event_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        total_amount: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        order_date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        payment_status: {
          type: Sequelize.STRING,
          defaultValue: 'PENDING',
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: false, // Tambahkan opsi ini untuk menghilangkan createdAt dan updatedAt
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
