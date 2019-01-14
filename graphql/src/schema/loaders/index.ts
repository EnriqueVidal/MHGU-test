import _ from 'lodash';
import { ArmorInstance } from 'models/Armor';
import { ItemInstance } from 'models/Item';
import { DbInterface } from 'typings/DBInterface';

export const itemLoader = async (keys: number[], { Sequelize, Item }: DbInterface): Promise<ItemInstance[]> => {
  const items: ItemInstance[] = await Item.findAll({
    raw: true,
    where: {
      id: { [Sequelize.Op.in]: keys },
      type: 'Armor',
    },
  });

  return items.filter((item) => !!item);
};

export const armorLoader = async (keys: number[], { Sequelize, Armor }: DbInterface): Promise<ArmorInstance[][]> => {
  const armors: ArmorInstance[] = await Armor.findAll({
    raw: true,
    where: {
      family: { [Sequelize.Op.in]: keys },
    },
  });

  const groupedArmors = _.groupBy(armors, 'familyId');
  return keys.map((familiId) => (groupedArmors[familiId] || []));
};
