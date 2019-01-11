import database from 'database';
import Sequelize from 'sequelize';

const ItemSkillTree = database.define('item_skill_tree',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: '_id',
    },

    itemId: {
      type: Sequelize.INTEGER,
      field: 'item_id',
    },

    skillTreeId: {
      type: Sequelize.INTEGER,
      field: 'skill_tree_id',
    },

    points: {
      type: Sequelize.INTEGER,
      field: 'point_value',
    },
  },
  {
    tableName: 'item_to_skill_tree',
    timestamps: false,
  });

export default ItemSkillTree;
