require('dotenv').config();

/*eslint-disable*/
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
/*eslint-disable*/

module.exports = {
  PORT,
  MONGODB_URI,
};
