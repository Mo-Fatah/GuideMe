const jwt = require('jsonwebtoken');
const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('../utils/config');

loginRouter.post('/', async (request, response) => {
  const { body } = request;
  const user = await User.findOne({ username: body.username });
  const correctPassword = user === null ? false
    : await bcrypt.compare(body.password, user.passwordHash);

  if (!user || !correctPassword) {
    response.status(401).send({
      error: 'invalid credentials',
    }).end();
    return;
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };
  const token = await jwt.sign(userForToken, config.SECRET);
  response.status(200).send({
    token,
    username: user.username,
    name: user.name,
    id: user.id,
  });
});

module.exports = loginRouter;
