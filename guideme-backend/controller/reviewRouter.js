const reviewRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');
const User = require('../models/User');

reviewRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  const restaurant = await Restaurant.findById(id);

  if (!body.title || !body.user || !body.content || !body.rate) {
    return response.status(400).send({
      error: 'some/all required fields of the review are missing',
    });
  }

  const user = await User.findOne({ username: body.user });
  body.user = user._id; //eslint-disable-line
  const review = new Review(body);
  const savedReview = await review.save();
  restaurant.reviews = await restaurant.reviews.concat(savedReview._id); //eslint-disable-line
  await restaurant.save();
  await savedReview.populate('user');
  return response.json(savedReview);
});

module.exports = reviewRouter;
