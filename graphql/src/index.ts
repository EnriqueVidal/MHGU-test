import DataLoader from 'dataloader';
import dotEnv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { isDevelopment } from 'helpers/env';
import models from 'models';
import Schema from 'schema';

import {
  armorLoader,
  itemLoader,
 } from 'schema/loaders';

dotEnv.config();

const port = parseInt(process.env.PORT, 10) || 8080;
const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: isDevelopment,
  schema: Schema,
  context: {
    models,
    armorLoader: new DataLoader((keys) => armorLoader(keys, models)),
    itemLoader: new DataLoader((keys) => itemLoader(keys, models)),
  },
}));

const server = app.listen(port, '0.0.0.0', (err) => {
  models.sequelize.sync();
  /* tslint:disable */
  if (err) console.log(err);
  console.info('Listening on port %s', port);
  /* tslint:enable */
});

export default server;
