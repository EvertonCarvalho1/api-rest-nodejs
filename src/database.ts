import { Knex, knex as setupKnex } from 'knex';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
};

export const knex = setupKnex(config);
