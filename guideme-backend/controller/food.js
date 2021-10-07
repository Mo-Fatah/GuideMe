const foodRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const logger = require('../utils/logger');

foodRouter.get('/', async (request, response) => {
  const result = await Restaurant.find({});
  response.json(result);
});

foodRouter.get('/:id', async (request, response) => {
  const id = request.params.id;
  const result = await Restaurant.findById(id);
  response.json(result);
});

foodRouter.post('/', async (request, response) => {
  const body = request.body;
  if (!body.name || !body.governorate || !body.city
    || !body.neighborhood || !body.address || !body.foodTypes) {
    return response.status(400).json({
      error: 'missing fields',
    });
  }
  const newRestaurant = new Restaurant(body);
  await newRestaurant.save();
  return response.json(newRestaurant);
});

module.exports = foodRouter;
