const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');
const User = require('../models/User');
const helper = require('./helper');

const api = supertest(app);

beforeEach(async () => {
  await Restaurant.deleteMany({});
  await User.deleteMany({});
  await Review.deleteMany({});
  const initialRest = helper.initialRestaurants.map((rest) => new Restaurant(rest));
  const promiseArray = initialRest.map((rest) => rest.save());
  await Promise.all(promiseArray);
}, 20000);

test('response is in a json format', async () => {
  await api
    .get('/api/food')
    .expect(200)
    .expect('Content-type', /application\/json/);
});

test('initial restaurants exist', async () => {
  const result = await api.get('/api/food');
  const { body } = result;
  expect(body).toHaveLength(helper.initialRestaurants.length);
  const names = body.map((rest) => rest.name);
  const cities = body.map((rest) => rest.city);
  const foodTypes = body.map((rest) => rest.foodTypes);
  expect(names).toContain('Falah');
  expect(names).toContain('Abo Ali');
  expect(cities).toContain('alex');
  expect(cities).toContain('mansora city');
  expect(foodTypes).toContainEqual(['koshary']);
  expect(foodTypes).toContainEqual(['kebda']);
});

test('get a single restaurant by id', async () => {
  const result = await api.get('/api/food');
  const { id } = result.body[0];
  const secResult = await api.get(`/api/food/${id}`);
  expect(secResult.body).toBeDefined();
  expect(secResult.body.name === 'Falah' || secResult.body.name === 'Abo Ali').toBeTruthy();
});

test('adding a new restautrant', async () => {
  const newRestaurant = {
    name: 'abo alaa',
    governorate: 'cairo',
    city: 'new cairo',
    neighborhood: 'cairo',
    address: 'nasr city',
    foodTypes: ['fish'],
  };
  await api.post('/api/food').send(newRestaurant);
  const result = await api.get('/api/food');
  expect(result.body).toHaveLength(helper.initialRestaurants.length + 1);
  const names = result.body.map((rest) => rest.name);
  expect(names).toContain('abo alaa');
});

test('if any information missing, response is status 400 and nothing is saved to the database', async () => {
  const noName = {
    governorate: 'cairo',
    city: 'new cairo',
    neighborhood: 'cairo',
    address: 'nasr city',
    foodTypes: ['fish'],
  };
  const noGover = {
    name: 'abo ali',
    city: 'new cairo',
    neighborhood: 'cairo',
    address: 'nasr city',
    foodTypes: ['fish'],
  };
  const noData = {};

  await api
    .post('/api/food')
    .send(noName)
    .expect(400);
  await api
    .post('/api/food')
    .send(noGover)
    .expect(400);
  await api
    .post('/api/food')
    .send(noData)
    .expect(400);
  const result = await api.get('/api/food');
  expect(result.body).toHaveLength(helper.initialRestaurants.length);
});

afterAll(async () => {
  await mongoose.connection.close();
});
