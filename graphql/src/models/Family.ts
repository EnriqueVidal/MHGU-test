import database from 'database';
import Sequelize from 'sequelize';

const Family = database.define('armor_family',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: '_id',
    },

    name: Sequelize.STRING,

    nameDE: {
      type: Sequelize.STRING,
      field: 'name_de',
    },

    nameFR: {
      type: Sequelize.STRING,
      field: 'name_fr',
    },

    nameES: {
      type: Sequelize.STRING,
      field: 'name_es',
    },

    nameIT: {
      type: Sequelize.STRING,
      field: 'name_it',
    },

    nameJP: {
      type: Sequelize.STRING,
      field: 'name_ja',
    },

    rarity: Sequelize.INTEGER,

    hunterType: {
      type: Sequelize.INTEGER,
      field: 'hunter_type',
    },
  },
  { timestamps: false });

// This can't happen if both Armor and Familiy are trying to fetch each other
// ArmorFamily.hasMany(Armor, { foreignKey: 'family' });

export default Family;
