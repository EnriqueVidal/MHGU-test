import { GraphQLString } from 'graphql';

export default {
  type: GraphQLString,
  resolve() {
    return process.env.npm_package_name;
  },
};
