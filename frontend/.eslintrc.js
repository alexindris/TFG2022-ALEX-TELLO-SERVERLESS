module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb',"prettier"],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // disable Prop spreading is forbidden
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
  },
};
