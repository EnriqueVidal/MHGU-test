import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
 } from 'graphql';

import ArmorType from './Armor';

const FamilyType = new GraphQLObjectType({
  name: 'Family',
  description: 'Armor Family',

  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    hunterType: {
      type: GraphQLInt,
    },
    rarity: {
      type: GraphQLInt,
    },
    armors: {
      type: new GraphQLList(ArmorType),
      resolve(parent, args, { armorLoader }) {
        return armorLoader.load(parent.id);
      },
    },
  }),
});

export default FamilyType;
