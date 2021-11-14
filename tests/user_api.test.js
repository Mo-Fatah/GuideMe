const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');
const User = require('../models/User');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
  await Review.deleteMany({});
  await Restaurant.deleteMany({});
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

test('a user can be requested by unique id, otherwise error', async () => {
  const user = {
    username: 'peter',
    password: '123456789',
  };
  const newUser = await api.post('/api/user').send(user);
  const correctResult = await api.get(`/api/user/${newUser.body.id}`);
  const wrongResult = await api.get(`/api/user/${newUser.body.id}12`);
  expect(correctResult.body.username).toBe(newUser.body.username);
  expect(wrongResult.body.error).toBeDefined();
}, 20000);

afterAll(async () => {
  await mongoose.connection.close();
});
