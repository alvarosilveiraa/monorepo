module.exports = {
  extends: ['../app/.eslintrc'],
  overrides: [
    {
      files: './index.js',
      parser: 'babel-eslint',
    },
  ],
};
