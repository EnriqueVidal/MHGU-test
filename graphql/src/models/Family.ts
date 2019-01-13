import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from 'typings/SequelizeAttributes';
import { ArmorInstance } from './Armor';

interface FamilyAttributes {
  id?: number;
  hunterType: number;
  name: string;
  nameDE?: string;
  nameFR?: string;
  nameES?: string;
  nameIT?: string;
  nameJP?: string;
  rarity: number;
}

export interface FamilyInstance extends Sequelize.Instance<FamilyAttributes>, FamilyAttributes {
  getArmors: Sequelize.HasManyGetAssociationsMixin<ArmorInstance>;
}

export type FamilyModel = Sequelize.Model<FamilyInstance, FamilyAttributes>;

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): FamilyModel => {
  const attributes: SequelizeAttributes<FamilyAttributes> = {
    hunterType: {
      field: 'hunter_type',
      type: DataTypes.INTEGER,
    },

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

    nameES: {
      field: 'name_es',
      type: DataTypes.STRING,
    },

    nameFR: {
      field: 'name_fr',
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

    rarity: DataTypes.INTEGER,
  };

  const tableOptions = {
    tableName: 'armor_families',
    timestamps: false,
  };

  const Family = sequelize.define<FamilyInstance, FamilyAttributes>(
    'Family',
    attributes,
    tableOptions,
  );

  Family.associate = (models) => {
    Family.hasMany(models.Armor, { foreignKey: 'family' });
  };

  return Family;
};
