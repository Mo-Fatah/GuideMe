const jwt = require('jsonwebtoken');
const logger = require('./logger');
const config = require('./config');
const User = require('../models/User');

const requestLogger = (request, response, next) => {
  logger.info(`Method: ${request.method}`);
  logger.info(`Path: ${request.path}`);
  logger.info(`Body: ${request.body}`);
  logger.info('------');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: 'unknown endpoint',
  });
};

const errorHandler = (error, request, response, next) => { /*eslint-disable-line*/
  logger.error(error.message);
  response.json({
    error: error.message,
  });
};

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
  }
  next();
};

const userExtractor = async (request, response, next) => {
  const { token } = request;
  if (token) {
    const decodedToken = jwt.verify(token, config.SECRET);
    if (decodedToken) {
      const user = User.findById(decodedToken.id);
      request.user = user;
    }
  }
  next();
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
  requestLogger,
};
