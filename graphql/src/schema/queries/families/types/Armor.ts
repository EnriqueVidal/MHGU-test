import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ItemType from './Item';

const ArmorType = new GraphQLObjectType({
  name: 'Armor',
  description: 'Armor Details',

  fields: () => ({
    gender: {
      type: GraphQLInt,
    },
    slot: {
      type: GraphQLString,
      description: 'Armor slot',
    },
    numSlots: {
      type: GraphQLInt,
      description: 'Total number of slots for decorations',
    },
    defense: {
      type: GraphQLInt,
      description: 'Base defense',
    },
    maxDefense: {
      type: GraphQLInt,
      description: 'Maximum Defense',
    },
    dragonRes: {
      type: GraphQLInt,
      description: 'Dragon Resistance',
    },
    fireRes: {
      type: GraphQLInt,
      description: 'Fire Resistance',
    },
    iceRes: {
      type: GraphQLInt,
      description: 'Ice Resistance',
    },
    thunderRes: {
      type: GraphQLInt,
      description: 'Thunder Resistance',
    },
    waterRes: {
      type: GraphQLInt,
      description: 'Water Resistance',
    },
    item: {
      type: ItemType,
      resolve(parent, args, { itemLoader }) {
        return itemLoader.load(parent.id);
      },
    },
  }),
});

export default ArmorType;
