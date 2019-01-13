import sequelize from 'database';
import Sequelize from 'sequelize';

import { DbInterface } from 'typings/DBInterface';

import ArmorFactory from './Armor';
import FamilyFactory from './Family';
import ItemFactory from './Item';
import ItemSkillTreeFactory from './ItemSkillTree';
import SkillTreeFactory from './SkillTree';

const models: DbInterface = {
  Sequelize,
  sequelize,
  Armor:          ArmorFactory(sequelize, Sequelize),
  Family:         FamilyFactory(sequelize, Sequelize),
  Item:           ItemFactory(sequelize, Sequelize),
  ItemSkillTree:  ItemSkillTreeFactory(sequelize, Sequelize),
  SkillTree:      SkillTreeFactory(sequelize, Sequelize),
};

Object.keys(models).forEach((name) => {
  if (typeof models[name].associate === 'function') {
    models[name].associate(models);
  }
});

export default models;
