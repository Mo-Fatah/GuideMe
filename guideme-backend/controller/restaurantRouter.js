const restaurantRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const logger = require('../utils/logger');

restaurantRouter.get('/', async (request, response) => {
  const result = await Restaurant.find({});
  response.json(result);
});

restaurantRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const result = await Restaurant.findById(id);
  response.json(result);
});

restaurantRouter.post('/', async (request, response) => {
  const { body } = request;
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

module.exports = restaurantRouter;
