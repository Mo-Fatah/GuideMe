const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/User');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
}, 20000);

test('successful login with token received', async () => {
  const newUser = {
    username: 'mohamed',
    password: '12345',
  };
  await api.post('/api/user').send(newUser);
  const result = await api.post('/api/login').send(newUser);
  expect(result.status).toBe(200);
  expect(result.body.username).toBe(newUser.username);
  expect(result.body.token).toBeDefined();
});

test('non-unique usernames should not be accepted', async () => {
  const unique = {
    username: 'mohamed',
    password: '12345',
  };
  const nonUnique = {
    username: 'mohamed',
    password: '98765',
  };
  const uniqueResult = await api.post('/api/user').send(unique);
  const nonUniqueResult = await api.post('/api/user').send(nonUnique);
  expect(uniqueResult.body.error).toBeUndefined();
  expect(nonUniqueResult.body.error).toBeDefined();

  await api
    .post('/api/login')
    .send(unique)
    .expect(200);
  await api
    .post('/api/login')
    .send(nonUnique)
    .expect(401);
});

afterAll(async () => {
  await mongoose.connection.close();
});
