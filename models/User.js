const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minLength: 4,
    unique: true,
    required: true,
  },
  name: String,
  passwordHash: {
    type: String,
    minLength: 5,
    unique: true,
    required: true,
  },
  postedReviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

mongoose.plugin(uniqueValidator);

/* eslint-disable */
mongoose.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
})
/* eslint-enable */
module.exports = mongoose.model('User', userSchema);
