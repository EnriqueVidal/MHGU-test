import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const ItemType = new GraphQLObjectType({
  name: 'Item',
  description: 'Item Details',

  fields: () => ({
    name: {
      type: GraphQLString,
    },
    buy: {
      type: GraphQLInt,
      description: 'Price sold to the player at',
    },

    sell: {
      type: GraphQLInt,
      description: 'Price the player can sell at',
    },
  }),
});

export default ItemType;
