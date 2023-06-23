import { expect, test, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

beforeAll(async () => {
  await app.ready();
});

test('O usuário consegue criar uma nova transação', async () => {
  const response = await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transaction',
      amount: 5000,
      type: 'credit',
    });

  expect(response.statusCode).toEqual(201);
});
