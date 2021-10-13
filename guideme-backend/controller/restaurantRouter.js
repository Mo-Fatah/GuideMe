const restaurantRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');

restaurantRouter.get('/', async (request, response) => {
  const dbQuery = { ...request.query };
  const result = await Restaurant.find(dbQuery);
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
  body.name = body.name.toLowerCase().trim();
  body.governorate = body.governorate.toLowerCase().trim();
  body.city = body.city.toLowerCase().trim();
  body.neighborhood = body.neighborhood.toLowerCase().trim();
  body.foodTypes = body.foodTypes.map((type) => type.toLowerCase());
  const newRestaurant = new Restaurant(body);
  await newRestaurant.save();
  return response.json(newRestaurant);
});

module.exports = restaurantRouter;
