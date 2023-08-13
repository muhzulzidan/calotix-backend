'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'defaultpict.jpg',
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER(2),
        defaultValue: 2,
      },
      is_active: {
        allowNull: false,
        type: Sequelize.INTEGER(2),
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
