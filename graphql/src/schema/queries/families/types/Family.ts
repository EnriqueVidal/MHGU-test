import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
 } from 'graphql';

import ArmorType from './Armor';
import { armors } from './resolvers';

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
      resolve: armors,
    },
  }),
});

export default FamilyType;
