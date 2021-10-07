const mongoose = require('mongoose');
const uniqueValidatore = require('mongoose-unique-validator');

const RestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  governorate: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  foodTypes: [{
    type: String,
    required: true,
  }],
});

mongoose.plugin(uniqueValidatore);

/* eslint-disable */
mongoose.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v
  }
})
/* eslint-enable */

module.exports = mongoose.model('Restaurant', RestSchema);
