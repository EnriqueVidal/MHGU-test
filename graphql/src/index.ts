import dotEnv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { isDevelopment } from './helpers/env';
import Schema from './schema';

dotEnv.config();

const port = parseInt(process.env.PORT, 10) || 8080;
const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: isDevelopment,
  schema: Schema,
}));

const server = app.listen(port, '0.0.0.0', (err) => {
  /* tslint:disable */
  if (err) console.log(err);
  console.info('Listening on port %s', port);
  /* tslint:enable */
});

export default server;
