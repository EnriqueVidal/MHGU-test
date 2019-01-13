import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import { FamilyInstance } from './Family';
import { ItemInstance } from './Item';

interface ArmorAttributes {
  id?: number;
  slot: string;
  defense: number;
  maxDefense: number;
  familyId: number;
  gender: number;
  hunterType: number;
  dragonRes: number;
  fireRes: number;
  iceRes: number;
  thunderRes: number;
  waterRes: number;
  numSlots: number;
}

export interface ArmorInstance extends Sequelize.Instance<ArmorAttributes>, ArmorAttributes {
  getFamily: Sequelize.BelongsToGetAssociationMixin<FamilyInstance>;
  getItem: Sequelize.HasOneGetAssociationMixin<ItemInstance>;
}

export type ArmorModel = Sequelize.Model<ArmorInstance, ArmorAttributes>;

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ArmorModel => {
  const attributes: SequelizeAttributes<ArmorAttributes> = {
    defense: DataTypes.INTEGER,

    dragonRes: {
      field: 'dragon_res',
      type: DataTypes.INTEGER,
    },

    familyId: {
      field: 'family',
      type: DataTypes.INTEGER,
    },

    fireRes: {
      field: 'fire_res',
      type: DataTypes.INTEGER,
    },

    gender: DataTypes.INTEGER,

    hunterType: {
      field: 'hunter_type',
      type: DataTypes.INTEGER,
    },

    iceRes: {
      field: 'ice_res',
      type: DataTypes.INTEGER,
    },

    id: {
      autoIncrement: true,
      field: '_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    maxDefense: {
      field: 'max_defense',
      type: DataTypes.INTEGER,
    },

    numSlots: {
      field: 'num_slots',
      type: DataTypes.INTEGER,
    },

    slot: DataTypes.STRING,

    thunderRes: {
      field: 'thunder_res',
      type: DataTypes.INTEGER,
    },

    waterRes: {
      field: 'water_res',
      type: DataTypes.INTEGER,
    },
  };

  const tableOptions = {
    tableName: 'armor',
    timestamps: false,
  };

  const Armor = sequelize.define<ArmorInstance, ArmorAttributes>(
    'Armor',
    attributes,
    tableOptions,
  );

  Armor.associate = (models: Sequelize.Models) => {
    Armor.belongsTo(models.Family, { foreignKey: 'family' });

    // This is missing the lookup by type =  'Armor'
    Armor.hasOne(models.Item, { foreignKey: '_id' });
  };

  return Armor;
};
