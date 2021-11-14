const reviewRouter = require('express').Router();
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

reviewRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  const { user } = request;

  if (!user) {
    response.status(401).send({
      error: 'Unauthorized',
    }).end();
    return;
  }

  if (!body.title || !body.content || !body.rate) {
    response.status(400).send({
      error: 'some/all required fields of the review are missing',
    }).end();
    return;
  }

  body.user = user._id;
  const review = new Review(body);
  const savedReview = await review.save();
  await savedReview.populate('user');

  // saving review to the restaurant's reviews and to the user's postedReviews
  const restaurant = await Restaurant.findById(id);
  restaurant.rate = restaurant.rate
    ? (Number(restaurant.rate) * restaurant.reviews.length + Number(body.rate))
      / (restaurant.reviews.length + 1)
    : Number(body.rate);

  user.postedReviews = user.postedReviews.concat(savedReview._id);
  restaurant.reviews = restaurant.reviews.concat(savedReview._id);
  await restaurant.save();
  await user.save();

  response.json(savedReview);
});

module.exports = reviewRouter;
