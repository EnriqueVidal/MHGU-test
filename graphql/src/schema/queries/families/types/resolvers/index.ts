import Bluebird from 'bluebird';
import _ from 'lodash';
import { ArmorInstance } from 'models/Armor';
import { FamilyInstance } from 'models/Family';
import { ItemInstance } from 'models/Item';
import { Context } from 'typings/DataLoader';

interface FamiliesArgs {
  query: string;
  hunterType?: number;
}

export const armors = (parent: FamilyInstance, args: {}, { armorLoader }: Context): Promise<ArmorInstance[]> => {
  return armorLoader.load(parent.id);
};

export const item = (parent: ArmorInstance, args: {}, { itemLoader }: Context): Promise<ItemInstance> => {
  return itemLoader.load(parent.id);
};

export const families = (parent: null, args: FamiliesArgs, { models }: Context): Bluebird<FamilyInstance[]> => {
  const { Op } = models.Sequelize;
  const notNull = { [Op.not]: null };

  const hunterType = _.has(args, 'hunterType') ? args.hunterType : notNull;

  return models.Family
    .findAll({
      where: {
        name: { [Op.iLike]: `%${args.query}%` },
        hunterType,
      },
    });
};

export default {
  armors,
  families,
  item,
};
