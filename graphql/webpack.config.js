const prodConfig = require('./config/webpack/production');
const testConfig = require('./config/webpack/test');

const PRODUCTION = 'production';
const TEST = 'test';

const reduceEnv = function(environment) {
  switch(environment) {
    case PRODUCTION:
      return prodConfig;

    case TEST:
    default:
      return testConfig;
  }
};

module.exports = reduceEnv(process.env.NODE_ENV);
