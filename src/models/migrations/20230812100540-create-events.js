'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Events',
      {
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
        start_date: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        end_date: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        start_time: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        end_time: {
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
      },
      {
        timestamps: false, // Tambahkan opsi ini untuk menghilangkan createdAt dan updatedAt
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  },
};
