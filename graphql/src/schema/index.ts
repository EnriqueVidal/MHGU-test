import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import queries from './queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'MHGU Quick Search',

    fields: {
      families: queries.families,
      name: queries.name,
      version: queries.version,
    },
  }),
});
