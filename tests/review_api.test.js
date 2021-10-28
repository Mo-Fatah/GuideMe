const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Review = require('../models/Review');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const helper = require('./helper');

const api = supertest(app);

beforeEach(async () => {
  await Review.deleteMany({});
  await Restaurant.deleteMany({});
  await User.deleteMany({});
});

test('valid user can post a review for existing restaurant', async () => {
  let result = await api.post('/api/food/').send(helper.initialRestaurants[0]);
  const newRest = result.body;
  result = await api.post('/api/user').send({ username: 'mohamed', password: '12345' });
  const newUser = result.body;

  const review = {
    title: 'title',
    content: 'good',
    rate: 4,
    user: newUser.username,
  };
  await api.post(`/api/review/${newRest.id}`).send(review);

  const resultRest = await api.get(`/api/food/${newRest.id}`);
  const titles = resultRest.body.reviews.map((r) => r.title);
  const users = resultRest.body.reviews.map((r) => r.user.username);
  expect(titles).toContain(review.title);
  expect(users).toContain(newUser.username);
});

afterAll(async () => {
  await mongoose.connection.close();
});
