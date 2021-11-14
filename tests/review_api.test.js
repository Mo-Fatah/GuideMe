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
}, 20000);

test('valid user can post a review for existing restaurant', async () => {
  let result = await api.post('/api/food/').send(helper.initialRestaurants[0]);
  const newRest = result.body;
  await api.post('/api/user').send({ username: 'mohamed', password: '12345' });
  result = await api.post('/api/login').send({ username: 'mohamed', password: '12345' });
  const loggedUser = result.body;
  const review = {
    title: 'title',
    content: 'good',
    rate: 4,
  };
  await api
    .post(`/api/review/${newRest.id}`)
    .set('Authorization', `bearer ${loggedUser.token}`)
    .send(review);

  const resultRest = await api.get(`/api/food/${newRest.id}`);
  const titles = resultRest.body.reviews.map((r) => r.title);
  const users = resultRest.body.reviews.map((r) => r.user.username);
  expect(titles).toContain(review.title);
  expect(users).toContain(loggedUser.username);
});

test('restaurant average rate is correct', async () => {
  let result = await api.post('/api/food/').send(helper.initialRestaurants[0]);
  const newRest = result.body;
  await api.post('/api/user').send({ username: 'mohamed', password: '12345' });
  result = await api.post('/api/login').send({ username: 'mohamed', password: '12345' });
  const loggedUser = result.body;

  const review1 = {
    title: 'title',
    content: 'good',
    rate: 4,
  };
  await api
    .post(`/api/review/${newRest.id}`)
    .set('Authorization', `bearer ${loggedUser.token}`)
    .send(review1);

  const review2 = {
    title: 'title',
    content: 'good',
    rate: 8,
  };
  await api
    .post(`/api/review/${newRest.id}`)
    .set('Authorization', `bearer ${loggedUser.token}`)
    .send(review2);

  const resultRest = await api.get(`/api/food/${newRest.id}`);
  expect(resultRest.body.rate).toBe(6);
}, 20000);

test('review posted to the reivewer\'s postedReviews', async () => {
  let result = await api.post('/api/food/').send(helper.initialRestaurants[0]);
  const newRest = result.body;
  await api.post('/api/user').send({ username: 'mohamed', password: '12345' });
  result = await api.post('/api/login').send({ username: 'mohamed', password: '12345' });
  const loggedUser = result.body;

  const review = {
    title: 'title',
    content: 'good',
    rate: 4,
  };

  await api
    .post(`/api/review/${newRest.id}`)
    .set('Authorization', `bearer ${loggedUser.token}`)
    .send(review);

  result = await api.get(`/api/user/${loggedUser.id}`);
  const reviews = result.body.postedReviews.map((r) => r.title);
  const contents = result.body.postedReviews.map((r) => r.content);
  expect(reviews).toContain('title');
  expect(contents).toContain('good');
});

afterAll(async () => {
  await mongoose.connection.close();
});
