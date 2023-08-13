'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Role_Accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(2),
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Role_Accesses');
  },
};
