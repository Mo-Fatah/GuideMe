const express = require('express');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const config = require('./utils/config');

const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('conntected to MongoDB');
  })
  .catch((err) => logger.error(err));

module.exports = app;
