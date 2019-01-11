import Armor from './Armor';
import Family from './Family';
import Item from './Item';
import ItemSkillTree from './ItemSkillTree';
import SkillTree from './SkillTree';

// Declare associations to prevent models from requiring each other here:

Armor.Family  = Armor.belongsTo(Family, { foreignKey: 'family' });
Armor.Item    = Armor.hasOne(Item, { foreignKey: '_id' });
Family.Armor  = Family.hasMany(Armor, { foreignKey: 'family' });

Item.ItemSkillTrees     = Item.hasMany(ItemSkillTree);
Item.SkillTrees         = Item.belongsToMany(SkillTree, { through: ItemSkillTree });
ItemSkillTree.SkillTree = ItemSkillTree.belongsTo(SkillTree);


export { Armor };
export { Family };
export { Item };
export { ItemSkillTree };

const models = {
  Armor,
  Family,
  Item,
};

export default models;
