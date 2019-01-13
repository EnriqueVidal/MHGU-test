import _ from 'lodash';
import { ArmorInstance } from 'models/Armor';
import { ItemInstance } from 'models/Item';
import { DbInterface } from 'typings/DBInterface';

export const itemLoader = async (keys: string[], { Sequelize, Item }: DbInterface): Promise<ItemInstance[]> => {
  const ids: number[] = keys.map((key) => parseInt(key, 10));

  const items: ItemInstance[] = await Item.findAll({
    raw: true,
    where: {
      id: { [Sequelize.Op.in]: ids },
      type: 'Armor',
    },
  });

  return items.filter((item) => !!item);
};

export const armorLoader = async (keys: string[], { Sequelize, Armor }: DbInterface): Promise<ArmorInstance[][]> => {
  const ids: number[] = keys.map((key) => parseInt(key, 10));

  const armors: ArmorInstance[] = await Armor.findAll({
    raw: true,
    where: {
      family: { [Sequelize.Op.in]: ids },
    },
  });

  const groupedArmors = _.groupBy(armors, 'familyId');
  return keys.map((familiId) => (groupedArmors[familiId] || []));
};
