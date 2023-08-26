'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.Regions, {
        // Menambahkan relasi belongsTo
        foreignKey: 'region_id',
        as: 'regions', // Alias yang digunakan saat melakukan eager loading
      });

      Events.hasMany(models.Tickets, {
        foreignKey: 'event_id', // Nama kolom yang menghubungkan
        as: 'tickets', // Alias yang digunakan saat melakukan eager loading
      });
    }
  }
  Events.init(
    {
      headline: DataTypes.STRING,
      artist_name: DataTypes.STRING,
      region_id: DataTypes.INTEGER,
      venue: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
      poster: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Events',
      timestamps: false,
    }
  );
  return Events;
};
