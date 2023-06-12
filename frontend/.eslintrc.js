module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // disable Prop spreading is forbidden
    'react/jsx-props-no-spreading': 'off', // We want to use prop spreading
    'react/prop-types': 'off', //   We won't use prop-types package
    'no-param-reassign': 'off', // We want to use param reassign
  },
};
