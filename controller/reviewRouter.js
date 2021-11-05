const reviewRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

reviewRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  const { user } = request;
  if (!user) {
    return response
      .status(401)
      .send({ error: 'Unauthorized' });
  }

  const restaurant = await Restaurant.findById(id);
  if (!body.title || !body.content || !body.rate) {
    return response
      .status(400)
      .send({
        error: 'some/all required fields of the review are missing',
      });
  }

  body.user = user._id; //eslint-disable-line
  const review = new Review(body);
  const savedReview = await review.save();
  restaurant.reviews = restaurant.reviews.concat(savedReview._id); //eslint-disable-line
  await restaurant.save();
  await savedReview.populate('user');
  return response.json(savedReview);
});

module.exports = reviewRouter;
