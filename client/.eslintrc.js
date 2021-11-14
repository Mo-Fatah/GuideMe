/* eslint-disable */
module.exports = {
  'env': {
      'browser': true,
      'es2021': true,
      'node': true
  },
  'extends': 'eslint:recommended',
  'extends': 'airbnb',
  'parserOptions': {
      'ecmaVersion': 12
  },
  'rules': {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [0, { }]
  },
  root: true
}
