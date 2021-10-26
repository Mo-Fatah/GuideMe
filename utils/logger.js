const info = (message) => {
  console.log(message); //eslint-disable-line
};

const error = (message) => {
  console.error(message); //eslint-disable-line
};

module.exports = {
  info,
  error,
};
