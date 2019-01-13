import { get } from 'helpers/env';
import Sequelize from 'sequelize';

export default new Sequelize(get('DB_NAME'), get('DB_USER'), get('DB_PASSWORD'), {
  host: get('DB_HOST'),
  dialect: get('DB_DIALECT', 'postgres'),
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
