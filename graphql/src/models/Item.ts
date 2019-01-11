import database from 'database';
import Sequelize from 'sequelize';

const Item = database.define('item',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: '_id',
    },

    name: Sequelize.INTEGER,

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

    type: Sequelize.STRING,

    subType: {
      type: Sequelize.STRING,
      field: 'sub_type',
    },

    rarity: Sequelize.INTEGER,

    carryCapacity: {
      type: Sequelize.INTEGER,
      field: 'carry_capacity',
    },

    buy: Sequelize.INTEGER,

    sell: Sequelize.INTEGER,

    description: Sequelize.STRING,

    descriptionDE: {
      type: Sequelize.STRING,
      field: 'description_de',
    },

    descriptionFR: {
      type: Sequelize.STRING,
      field: 'description_fr',
    },

    descriptionES: {
      type: Sequelize.STRING,
      field: 'description_es',
    },

    descriptionIT: {
      type: Sequelize.STRING,
      field: 'description_it',
    },

    descriptionJP: {
      type: Sequelize.STRING,
      field: 'description_ja',
    },

    icon: {
      type: Sequelize.STRING,
      field: 'icon_name',
    },

    color: {
      type: Sequelize.INTEGER,
      field: 'icon_color',
    },

    account: Sequelize.INTEGER,

  },
  { timestamps: false });

export default Item;
