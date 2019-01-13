import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import { ItemSkillTreeInstance } from './ItemSkillTree';
import { SkillTreeInstance } from './SkillTree';

interface ItemAttributes {
  id?: number;
  name: string;
  nameDE?: string;
  nameFR?: string;
  nameES?: string;
  nameIT?: string;
  nameJP?: string;
  rarity: number;
  carryCapacity?: number;
  buy: number;
  sell: number;
  description?: string;
  descriptionDE?: string;
  descriptionFR?: string;
  descriptionES?: string;
  descriptionIT?: string;
  descriptionJP?: string;
  icon: string;
  color: number;
  account?: number;
  type?: string;
  subType?: string;
}

export interface ItemInstance extends Sequelize.Instance<ItemAttributes>, ItemAttributes {
  getItemSkillTrees: Sequelize.HasManyGetAssociationsMixin<ItemSkillTreeInstance>;
  getSkillTrees: Sequelize.BelongsToManyGetAssociationsMixin<SkillTreeInstance>;
}

export type ItemModel = Sequelize.Model<ItemInstance, ItemAttributes>;

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ItemModel => {
  const attributes: SequelizeAttributes<ItemAttributes> = {
    id: {
      autoIncrement: true,
      field: '_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: DataTypes.INTEGER,

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

    type: DataTypes.STRING,

    subType: {
      field: 'sub_type',
      type: DataTypes.STRING,
    },

    rarity: DataTypes.INTEGER,

    carryCapacity: {
      field: 'carry_capacity',
      type: DataTypes.INTEGER,
    },

    buy: DataTypes.INTEGER,

    sell: DataTypes.INTEGER,

    description: DataTypes.STRING,

    descriptionDE: {
      field: 'description_de',
      type: DataTypes.STRING,
    },

    descriptionFR: {
      field: 'description_fr',
      type: DataTypes.STRING,
    },

    descriptionES: {
      field: 'description_es',
      type: DataTypes.STRING,
    },

    descriptionIT: {
      field: 'description_it',
      type: DataTypes.STRING,
    },

    descriptionJP: {
      field: 'description_ja',
      type: DataTypes.STRING,
    },

    icon: {
      field: 'icon_name',
      type: DataTypes.STRING,
    },

    color: {
      field: 'icon_color',
      type: DataTypes.INTEGER,
    },

    account: DataTypes.INTEGER,
  };

  const tableOptions = {
    tableName: 'items',
    timestamps: false,
  };

  const Item = sequelize.define<ItemInstance, ItemAttributes>(
    'Item',
    attributes,
    tableOptions,
  );

  Item.associate = (models: Sequelize.Models) => {
    Item.hasMany(models.ItemSkillTree, { foreignKey: 'item_id' });
    Item.belongsToMany(models.SkillTree, {
      through: models.ItemSkillTree,
      foreignKey: 'item_id',
     });
  };

  return Item;
};
