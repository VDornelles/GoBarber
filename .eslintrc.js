module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'no-params-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
