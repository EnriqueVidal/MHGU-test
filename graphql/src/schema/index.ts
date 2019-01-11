import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import _ from 'lodash';
import { Op } from 'sequelize';

import { Armor, Family } from 'models';

import { resolver } from 'graphql-sequelize';
import { armorType, familyType } from 'schema/queries/Armors';

import { createContext } from 'dataloader-sequelize';
import database from 'database';

createContext(database);

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    fields: {
      armors: {
        type: new GraphQLList(armorType),
        args: {
          limit: {
            type: GraphQLInt,
          },
        },

        resolve: resolver(Armor),
      },

      families: {
        type: new GraphQLList(familyType),
        args: {
          query: {
            type: new GraphQLNonNull(GraphQLString),
          },
          hunterType: {
            type: GraphQLInt,
          },
        },

        resolve: resolver(Family, {
          before: (findOptions, args) => {
            const notNull     =  { [Op.not]: null };
            const hunterType  = _.has(args, 'hunterType') ? args.hunterType : notNull;

            findOptions.where = {
              name: { [Op.iLike]: `%${args.query}%` },
              hunterType,
            };

            return findOptions;
          },
        }),
      },

      name: {
        type: GraphQLString,
        resolve() {
          return process.env.npm_package_name;
        },
      },

      version: {
        type: GraphQLString,
        resolve() {
          return process.env.npm_package_version;
        },
      },
    },

    name: 'RootQueryType',
  }),
});
