const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    require: true,
  },
});

mongoose.plugin(uniqueValidator);
/* eslint-disable */
reviewSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v
  }
})
/* eslint-enable */

module.exports = mongoose.model('Review', reviewSchema);
