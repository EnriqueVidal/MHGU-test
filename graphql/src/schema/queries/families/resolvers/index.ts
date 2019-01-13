import _ from 'lodash';

const families = (parent, args, { models }) => {
  const { Op } = models.Sequelize;
  const noNull = { [Op.not]: null };

  const hunterType = _.has(args, 'hunterType') ? args.hunterType : noNull;

  return models.Family
    .findAll({
      where: {
        name: { [Op.iLike]: `%${args.query}%` },
        hunterType,
      },
    });
};

export default {
  families,
};
