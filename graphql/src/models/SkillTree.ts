import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import { ItemInstance } from './Item';
import { ItemSkillTreeInstance } from './ItemSkillTree';

interface SkillTreeAttributes {
  id?: number;
  name: string;
  nameDE?: string;
  nameFR?: string;
  nameES?: string;
  nameIT?: string;
  nameJP?: string;
}

export interface SkillTreeInstance extends Sequelize.Instance<SkillTreeAttributes>, SkillTreeAttributes {
  getItems: Sequelize.BelongsToManyGetAssociationsMixin<ItemInstance>;
  getItemSkillTrees: Sequelize.HasManyGetAssociationsMixin<ItemSkillTreeInstance>;
}

export type SkillTreeModel = Sequelize.Model<SkillTreeInstance, SkillTreeAttributes>;

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): SkillTreeModel => {
  const attributes: SequelizeAttributes<SkillTreeAttributes> = {
    id: {
      autoIncrement: true,
      field: '_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: DataTypes.STRING,

    nameDE: {
      field: 'name_de',
      type: DataTypes.STRING,
    },

    nameFR: {
      field: 'name_fr',
      type: DataTypes.STRING,
    },

    nameES: {
      field: 'name_es',
      type: DataTypes.STRING,
    },

    nameIT: {
      field: 'name_it',
      type: DataTypes.STRING,
    },

    nameJP: {
      field: 'name_ja',
      type: DataTypes.STRING,
    },
  };

  const tableOptions = {
    tableName: 'skill_trees',
    timestamps: false,
  };

  const SkillTree = sequelize.define<SkillTreeInstance, SkillTreeAttributes>(
    'SkillTree',
    attributes,
    tableOptions,
  );

  SkillTree.associate = (models: Sequelize.Models) => {
    SkillTree.hasMany(models.ItemSkillTree, { foreignKey: 'skill_tree_id' });
    SkillTree.belongsToMany(models.Item, {
      through: models.ItemSkillTree,
      foreignKey: 'item_id',
    });
  };

  return SkillTree;
};
