import Sequelize from 'sequelize';

export default new Sequelize('mhgu', 'postgres', null, {
  host: 'db',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});
