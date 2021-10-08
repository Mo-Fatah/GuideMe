const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

userRouter.post('/', async (request, response) => {
  const { body } = request;
  if (!body.username || !body.password) {
    return response.status(400).send({
      error: 'username and password must be provided',
    });
  }
  if (body.username.length < 4 || body.password.length < 5) {
    return response.status(400).send({
      error: 'username and password must be atleast 4 and 5 characters',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash,
    postedReview: [],
  });
  await newUser.save();
  return response.json(newUser);
});

module.exports = userRouter;
