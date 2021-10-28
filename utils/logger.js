const info = (message) => {
  if (process.env.NODE_ENV === 'test') return;
  console.log(message); //eslint-disable-line
};

const error = (message) => {
  if (process.env.NODE_ENV === 'test') return;
  console.error(message); //eslint-disable-line
};

module.exports = {
  info,
  error,
};
