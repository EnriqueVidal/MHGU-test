import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import FamilyType from './types/Family';
import { families } from './types/resolvers';

export default {
  type: new GraphQLList(FamilyType),
  args: {
    query: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Family name',
    },
    hunterType: {
      type: GraphQLInt,
    },
  },
  resolve: families,
};
