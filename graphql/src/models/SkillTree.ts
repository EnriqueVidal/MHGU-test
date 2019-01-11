import database from 'database';
import Sequelize from 'sequelize';

const SkillTree = database.define('skill_trees',
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
  },
  { timestamps: false });

export default SkillTree;
