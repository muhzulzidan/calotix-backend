'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      headline: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      artist_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      region_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      venue: {
        allowNull: true,
        type: Sequelize.STRING(150),
      },
      event_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      times: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      poster: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  },
};
