const reviewRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

reviewRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  const restaurant = Restaurant.findById(id);

  if (!body.title || !body.user || !body.content || !body.rate) {
    return response.status(400).send({
      error: 'some/all required fields of the review are missing',
    });
  }

  const review = new Review(body);
  await review.save();
  restaurant.reviews = restaurant.reviews.concat(review);
  await restaurant.save();
  return response.json(restaurant);
});

module.exports = reviewRouter;
