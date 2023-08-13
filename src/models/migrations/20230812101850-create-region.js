'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      region_city: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Regions');
  },
};
