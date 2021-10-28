require('dotenv').config();

const { SECRET } = process.env;
const PORT = process.env.PORT || 3003;

let MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.MONGODB_URI_TEST;
} else {
  MONGODB_URI = process.env.MONGODB_URI;
}

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
