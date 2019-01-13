import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import { ItemInstance } from './Item';
import { SkillTreeInstance } from './SkillTree';

interface ItemSkillTreeAttributes {
  id?: number;
  itemId: number;
  skillTreeId: number;
  points: number;
}

export interface ItemSkillTreeInstance extends Sequelize.Instance<ItemSkillTreeAttributes>, ItemSkillTreeAttributes {
  getItem: Sequelize.BelongsToGetAssociationMixin<ItemInstance>;
  getSkillTree: Sequelize.BelongsToGetAssociationMixin<SkillTreeInstance>;
}

export type ItemSkillTreeModel = Sequelize.Model<ItemSkillTreeInstance, ItemSkillTreeAttributes>;

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ItemSkillTreeModel => {
  const attributes: SequelizeAttributes<ItemSkillTreeAttributes> = {
    id: {
      autoIncrement: true,
      field: '_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    itemId: {
      field: 'item_id',
      type: DataTypes.INTEGER,
    },

    skillTreeId: {
      field: 'skill_tree_id',
      type: DataTypes.INTEGER,
    },

    points: {
      field: 'point_value',
      type: DataTypes.INTEGER,
    },
  };

  const tableOptions = {
    tableName: 'item_to_skill_tree',
    timestamps: false,
  };

  const ItemSkillTree = sequelize.define<ItemSkillTreeInstance, ItemSkillTreeAttributes>(
    'ItemSkillTree',
    attributes,
    tableOptions,
  );

  ItemSkillTree.associate = (models: Sequelize.Models) => {
    ItemSkillTree.belongsTo(models.Item, { foreignKey: 'item_id' });
    ItemSkillTree.belongsTo(models.SkillTree, { foreignKey: 'skill_tree_id' });
  };

  return ItemSkillTree;
};
