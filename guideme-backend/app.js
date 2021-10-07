const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./utils/logger');
const config = require('./utils/config');
const foodRouter = require('./controller/food');

const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('conntected to MongoDB');
  })
  .catch((err) => logger.error(err));

app.use(cors());
app.use(express.json());
app.use('/api/food', foodRouter);
module.exports = app;
