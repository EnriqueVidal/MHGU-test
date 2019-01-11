import database from 'database';
import Sequelize from 'sequelize';

import Item from './Item';

const Armor = database.define('armor', 
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: '_id',
    },

    slot: Sequelize.STRING,

    defense: Sequelize.INTEGER,

    maxDefense: {
      type: Sequelize.INTEGER,
      field: 'max_defense',
    },

    fireRes: {
      type: Sequelize.INTEGER,
      field: 'fire_res',
    },

    thunderRes: {
      type: Sequelize.INTEGER,
      field: 'thunder_res',
    },

    dragonRes: {
      type: Sequelize.INTEGER,
      field: 'dragon_res',
    },

    waterRes: {
      type: Sequelize.INTEGER,
      field: 'water_res',
    },

    iceRes: {
      type: Sequelize.INTEGER,
      field: 'ice_res',
    },

    gender: Sequelize.INTEGER,

    hunterType: {
      type: Sequelize.INTEGER,
      field: 'hunter_type',
    },

    numSlots: {
      type: Sequelize.INTEGER,
      field: 'num_slots',
    },

    familyId: {
      type: Sequelize.INTEGER,
      field: 'family',
    }
  },
  {
    tableName: 'armor',
    timestamps: false,
  });

export default Armor;
