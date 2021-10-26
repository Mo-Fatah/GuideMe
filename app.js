const express = require('express');
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./utils/config');
const logger = require('./utils/logger');
const RestaurantRouter = require('./controller/restaurantRouter');
const userRouter = require('./controller/userRouter');
const loginRouter = require('./controller/login');
const reviewRouter = require('./controller/reviewRouter');
const middleware = require('./utils/middleware');

const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('conntected to MongoDB');
  })
  .catch((err) => logger.error(err));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use('/api/food', RestaurantRouter);
app.use('/api/user', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/review', reviewRouter);
app.get('/health', (request, response) => {
  response.send('hi');
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(middleware.unknownEndpoint);
app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);
app.use(middleware.errorHandler);

module.exports = app;
