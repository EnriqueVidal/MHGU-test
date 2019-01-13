import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import Resolvers from './resolvers';
import Types from './types';

export default {
  type: new GraphQLList(Types.Family),
  args: {
    query: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Family name',
    },
    hunterType: {
      type: GraphQLInt,
    },
  },
  resolve: Resolvers.families,
};
