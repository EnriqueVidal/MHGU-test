import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { 
  Armor, 
  Family, 
  Item,
  ItemSkillTree,
} from 'models';

import { resolver } from 'graphql-sequelize';

const itemType = new GraphQLObjectType({
  name: 'Item',
  description: 'Game Item',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Item ID/Armor ID',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nameDE: {
      type: GraphQLString,
    },
    nameFR: {
      type: GraphQLString,
    },
    nameES: {
      type: GraphQLString,
    },
    nameIT: {
      type: GraphQLString,
    },
    nameJP: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    subType: {
      type: GraphQLString,
    },
    rarity: {
      type: GraphQLInt,
    },
    carryCapacity: {
      type: GraphQLInt,
    },
    buy: {
      type: GraphQLInt,
    },
    sell: {
      type: GraphQLInt,
    },
    description: {
      type: GraphQLString,
    },
    descriptionDE: {
      type: GraphQLString,
    },
    descriptionFR: {
      type: GraphQLString,
    },
    descriptionES: {
      type: GraphQLString,
    },
    descriptionIT: {
      type: GraphQLString,
    },
    descriptionJP: {
      type: GraphQLString,
    },
    icon: {
      type: GraphQLString,
    },
    color: {
      type: GraphQLString,
    },
    account: {
      type: GraphQLInt,
    },

    itemSkillTrees: {
      type: new GraphQLList(itemSkillTreeType),
      resolve: resolver(Item.ItemSkillTrees),
    },

    skillTrees: {
      type: new GraphQLList(skillTreeType),
      resolve: resolver(Item.SkillTrees),
    },
  }),
});

const skillTreeType = new GraphQLObjectType({
  name: 'SkillTree',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'SkillTree ID',
    },

    name: {
      type: GraphQLString,
    },

    nameDE: {
      type: GraphQLString,
      description: 'Name in German',
    },

    nameFR: {
      type: GraphQLString,
      description: 'Name in French',
    },

    nameES: {
      type: GraphQLString,
      description: 'Name in Spanish',
    },

    nameIT: {
      type: GraphQLString,
      description: 'Name in Italian',
    },

    nameJP: {
      type: GraphQLString,
      description: 'Name in Japanese',
    },
  }),
});

const itemSkillTreeType = new GraphQLObjectType({
  name: 'ItemSkillTree',
  description: 'Map Items to specific Skill Trees',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },

    itemId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Item ID',
    },

    skillTreeId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Skill Tree ID',
    },

    points: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Points in Skill Tree',
    },

    skillTree: {
      type: skillTreeType,
      description: 'Item Skill Tree',
      resolve: resolver(ItemSkillTree.SkillTree),
    },
  }),
});

export const armorType = new GraphQLObjectType({
  name: 'Armor',
  description: 'Armor Piece',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Armor ID',
    },
    slot: {
      type: GraphQLString,
      description: 'Type of Armor',
    },
    defense: {
      type: GraphQLInt,
      description: 'Base Armor Piece defense',
    },
    maxDefense: {
      type: GraphQLInt,
      description: 'Max Armor Piece defense',
    },
    fireRes: {
      type: GraphQLInt,
      description: 'Fire resistance',
    },
    thunderRes: {
      type: GraphQLInt,
      description: 'Thunder resistance',
    },
    dragonRes: {
      type: GraphQLInt,
      description: 'Dragon resistance'
    },
    waterRes: {
      type: GraphQLInt,
      description: 'Water resistence',
    },
    iceRes: {
      type: GraphQLInt,
      description: 'Ice resistence',
    },
    gender: {
      type: GraphQLInt,
    },
    hunterType: {
      type: GraphQLInt,
    },
    numSlots: {
      type: GraphQLInt,
      description: 'Total decoration slots in Armor Piece',
    },
    familyId: {
      type: GraphQLInt,
    },
    family: {
      type: familyType,
      resolve: resolver(Armor.Family), 
    },
    item: {
      type: itemType,
      resolve: resolver(Armor.Item),
    },
  }),
});

export const familyType = new GraphQLObjectType({
  name: 'Family',
  description: 'Armor Family',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nameDE: {
      type: GraphQLString,
    },
    nameFR: {
      type: GraphQLString,
    },
    nameES: {
      type: GraphQLString,
    },
    nameIT: {
      type: GraphQLString,
    },
    nameJP: {
      type: GraphQLString,
    },
    rarity: {
      type: GraphQLInt,
    },
    hunterType: {
      type: GraphQLInt,
    },
    armors: {
      type: new GraphQLList(armorType),
      resolve: resolver(Family.Armor),
    },
  }),
});

